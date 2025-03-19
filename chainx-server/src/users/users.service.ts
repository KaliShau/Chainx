import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { UserDto } from './user.dto'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(username: string, passwordHash: string) {
    return this.prisma.users.create({
      data: {
        passwordHash,
        username,
      },
    })
  }

  async getById(id: string) {
    return this.prisma.users.findUnique({
      where: { id },
    })
  }

  async getByUsername(username: string) {
    return this.prisma.users.findUnique({
      where: { username },
    })
  }

  async update(dto: UserDto, userId: string) {
    const user = await this.getById(userId)

    if (!user) throw new BadRequestException('User not found!')

    return this.prisma.users.update({
      where: { id: userId },
      data: {
        ...dto,
      },
    })
  }
}
