import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { MessagesDto } from './messages.dto'
import { UsersService } from 'src/users/users.service'

@Injectable()
export class MessagesService {
  constructor(
    private prisma: PrismaService,
    private userService: UsersService
  ) {}

  async create(
    senderId: string,
    usernameReceiver: string,
    { content }: MessagesDto
  ) {
    const receiver = await this.userService.getByUsername(usernameReceiver)

    if (!receiver) throw new BadRequestException('Receiver not found!')

    return this.prisma.messages.create({
      data: {
        content,
        senderId,
        receiverId: receiver.id,
      },
    })
  }

  async getById(messageId: string, id: string) {
    return this.prisma.messages.findUnique({
      where: {
        id: messageId,
        OR: [{ receiverId: id }, { senderId: id }],
      },
      include: {
        receiver: true,
        sender: true,
      },
    })
  }

  async getBySender(page: number, limit: number, userId: string) {
    const skip = (page - 1) * limit

    return this.prisma.messages.findMany({
      skip: skip,
      take: Number(limit),
      orderBy: { createdAt: 'desc' },
      include: { receiver: true, sender: true },
      where: {
        senderId: userId,
        deletedBySenderAt: null,
      },
    })
  }

  async getByReceiver(page: number, limit: number, userId: string) {
    const skip = (page - 1) * limit

    return this.prisma.messages.findMany({
      skip: skip,
      take: Number(limit),
      orderBy: { createdAt: 'desc' },
      include: { receiver: true, sender: true },
      where: {
        receiverId: userId,
        deletedByReceiverAt: null,
        deletedBySenderAt: null,
      },
    })
  }

  async delete(messageId: string, userId: string) {
    const message = await this.getById(messageId, userId)

    if (!message) {
      throw new BadRequestException('Message not found!')
    }

    if (message.senderId == userId) {
      if (message.deletedBySenderAt != null)
        throw new BadRequestException('Message not found!')

      return this.prisma.messages.update({
        where: { id: messageId, senderId: userId },
        data: { deletedBySenderAt: new Date() },
      })
    }
    if (message.receiverId == userId) {
      if (message.deletedByReceiverAt != null)
        throw new BadRequestException('Message not found!')

      return this.prisma.messages.update({
        where: { id: messageId, receiverId: userId },
        data: { deletedByReceiverAt: new Date() },
      })
    }

    throw new BadRequestException('Message not found!')
  }
}
