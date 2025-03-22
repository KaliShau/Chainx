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

  async create(senderId: string, receiverId: string, { content }: MessagesDto) {
    const receiver = await this.userService.getById(receiverId)

    if (!receiver) throw new BadRequestException('Receiver not found!')

    return this.prisma.messages.create({
      data: {
        content,
        senderId,
        receiverId,
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

  async getMy(page: number, limit: number, id: string) {
    const skip = (page - 1) * limit

    return this.prisma.messages.findMany({
      skip: skip,
      take: Number(limit),
      orderBy: { createdAt: 'desc' },
      include: { receiver: true, sender: true },
      where: {
        OR: [{ receiverId: id }, { senderId: id }],
        deletedBySenderAt: null,
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
      },
    })
  }

  async deleteBySender(messageId: string, senderId: string) {
    const message = await this.getById(messageId, senderId)

    if (!message || message.senderId != senderId)
      throw new BadRequestException('Message not found!')

    return this.prisma.messages.update({
      where: { id: messageId, senderId },
      data: { deletedBySenderAt: new Date() },
    })
  }

  async deleteByReceiver(messageId: string, receiverId: string) {
    const message = await this.getById(messageId, receiverId)

    if (!message || message.receiverId != receiverId)
      throw new BadRequestException('Message not found!')

    return this.prisma.messages.update({
      where: { id: messageId, receiverId },
      data: { deletedByReceiverAt: new Date() },
    })
  }
}
