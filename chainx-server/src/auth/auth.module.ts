import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { UsersService } from 'src/users/users.service'
import { PrismaService } from 'src/prisma/prisma.service'
import { JwtModule } from '@nestjs/jwt'
import { JwtConfig } from 'src/config/jwt.config'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtStrategy } from './strategies/jwt.strategy'
import { CookieService } from './cookie.service'

@Module({
  controllers: [AuthController],
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: JwtConfig,
    }),
  ],
  providers: [
    AuthService,
    UsersService,
    PrismaService,
    JwtStrategy,
    CookieService,
  ],
})
export class AuthModule {}
