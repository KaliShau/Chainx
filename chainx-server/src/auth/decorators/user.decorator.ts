import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { Users } from '@prisma/client'

export const User = createParamDecorator(
  (data: keyof Users, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest()
    return data ? request.user[data] : request.user
  }
)
