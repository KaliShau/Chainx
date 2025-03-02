import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(username: string, password_hash: string) {
    return this.prisma.users.create({
      data: {
        password_hash,
        username,
      },
    })
  }

  async getUserById(id: string) {
    return this.prisma.users.findUnique({
      where: { id },
    })
  }

  async getUserByUsername(username: string) {
    return this.prisma.users.findUnique({
      where: { username },
    })
  }
}
