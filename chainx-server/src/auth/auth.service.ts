import { BadRequestException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from 'src/users/users.service'
import { AuthDto } from './auth.dto'
import { hash, verify } from 'argon2'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwt: JwtService
  ) {}

  async signIn(dto: AuthDto) {
    const user = await this.usersService.getUserByUsername(dto.username)

    if (!user) throw new BadRequestException('Wrong login or password!')

    const isPasswordValid = await verify(user.passwordHash, dto.password)

    if (!isPasswordValid)
      throw new BadRequestException('Wrong login or password!')

    const tokens = await this.issueTokens(user.id)

    return { user, ...tokens }
  }

  async signUp(dto: AuthDto) {
    const user = await this.usersService.getUserByUsername(dto.username)

    if (user)
      throw new BadRequestException('Username or password is not valid!')

    const newUser = await this.usersService.createUser(
      dto.username,
      await hash(dto.password)
    )

    const tokens = await this.issueTokens(newUser.id)

    return { user: newUser, ...tokens }
  }

  async getNewTokens(refreshToken: string) {
    if (!refreshToken) throw new BadRequestException('Refresh token not found!')

    try {
      const payload = await this.jwt.verifyAsync(refreshToken)

      const user = await this.usersService.getUserById(payload.id)
      const tokens = await this.issueTokens(user.id)

      return { user, ...tokens }
    } catch (e) {
      throw new BadRequestException('Invalid refresh token!')
    }
  }

  // Utils

  async issueTokens(id: string) {
    const data = { id }

    const accessToken = await this.jwt.signAsync(data, { expiresIn: '1h' })
    const refreshToken = await this.jwt.signAsync(data, { expiresIn: '7d' })

    return { accessToken, refreshToken }
  }
}
