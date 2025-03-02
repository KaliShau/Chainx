import {
  Body,
  Controller,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { Response } from 'express'
import { AuthDto } from './auth.dto'
import { CookieService } from './cookie.service'

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private cookieService: CookieService
  ) {}

  @UsePipes(new ValidationPipe())
  @Post('sign-in')
  async signIn(
    @Res({ passthrough: true }) res: Response,
    @Body() dto: AuthDto
  ) {
    const { refreshToken, ...user } = await this.authService.signIn(dto)

    await this.cookieService.setCookie(res, refreshToken)

    return user
  }

  @UsePipes(new ValidationPipe())
  @Post('sign-up')
  async signUp(
    @Res({ passthrough: true }) res: Response,
    @Body() dto: AuthDto
  ) {
    const { refreshToken, ...user } = await this.authService.signUp(dto)

    await this.cookieService.setCookie(res, refreshToken)

    return user
  }

  @Post('sign-out')
  async signOut(@Res({ passthrough: true }) res: Response) {
    this.cookieService.clearCookie(res)

    return { message: 'Sign-out successfully!' }
  }
}
