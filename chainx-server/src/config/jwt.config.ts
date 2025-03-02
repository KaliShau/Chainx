import { ConfigService } from '@nestjs/config'
import { JwtModuleOptions } from '@nestjs/jwt'

export const JwtConfig = (config: ConfigService): JwtModuleOptions => {
  return {
    secret: config.get('JWT_SECRET'),
  }
}
