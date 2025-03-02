import { BadRequestException, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from 'src/users/users.service'
import { AuthDto, RefreshTokenDto } from './auth.dto'
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

    const isPasswordValid = await verify(user.password_hash, dto.password)

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

  async getNewTokens(dto: RefreshTokenDto) {}

  // Utils

  async issueTokens(id: string) {
    const data = { id }

    const accessToken = await this.jwt.signAsync(data, { expiresIn: '1h' })
    const refreshToken = await this.jwt.signAsync(data, { expiresIn: '7d' })

    return { accessToken, refreshToken }
  }
}
