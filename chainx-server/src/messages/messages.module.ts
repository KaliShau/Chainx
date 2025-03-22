import { Module } from '@nestjs/common'
import { MessagesService } from './messages.service'
import { MessagesController } from './messages.controller'
import { PrismaService } from 'src/prisma/prisma.service'
import { UsersService } from 'src/users/users.service'

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, PrismaService, UsersService],
})
export class MessagesModule {}
