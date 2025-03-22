import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { MessagesService } from './messages.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { MessagesDto } from './messages.dto'
import { User } from 'src/auth/decorators/user.decorator'

@Controller('messages')
@Auth()
export class MessagesController {
  constructor(private readonly messagesService: MessagesService) {}

  @UsePipes(new ValidationPipe())
  @Post(':id')
  async create(
    @Body() dto: MessagesDto,
    @User('id') senderId: string,
    @Param('id') receiverId: string
  ) {
    return this.messagesService.create(senderId, receiverId, dto)
  }

  @Get()
  async getMy(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 6,
    @User('id') id: string
  ) {
    return this.messagesService.getMy(page, limit, id)
  }

  @Get('sender')
  async getBySender(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 6,
    @User('id') id: string
  ) {
    return this.messagesService.getBySender(page, limit, id)
  }

  @Get('receiver')
  async getByReceiver(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 6,
    @User('id') id: string
  ) {
    return this.messagesService.getByReceiver(page, limit, id)
  }

  @Delete('sender/:id')
  async deleteBySender(
    @Param('id') messageId: string,
    @User('id') senderId: string
  ) {
    return this.messagesService.deleteBySender(messageId, senderId)
  }

  @Delete('receiver/:id')
  async deleteByReceiver(
    @Param('id') messageId: string,
    @User('id') receiverId: string
  ) {
    return this.messagesService.deleteByReceiver(messageId, receiverId)
  }

  @Get(':id')
  async getById(@Param('id') messageId: string, @User('id') id: string) {
    return this.messagesService.getById(messageId, id)
  }
}
