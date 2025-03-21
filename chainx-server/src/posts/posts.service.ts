import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { PostsDto } from './dto.posts'

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, { content, imageUrl, title }: PostsDto) {
    return this.prisma.posts.create({
      data: {
        content,
        imageUrl,
        title,
        userId,
      },
    })
  }

  async getById(id: string) {
    return this.prisma.posts.findUnique({
      where: { id },
      include: {
        comments: {
          include: {
            user: true,
          },
          orderBy: { createdAt: 'desc' },
        },
        likes: true,
        user: true,
      },
    })
  }

  async getAll(page: number, limit: number) {
    const skip = (page - 1) * limit

    return this.prisma.posts.findMany({
      skip: skip,
      take: Number(limit),
      orderBy: { createdAt: 'desc' },
      include: { comments: true, likes: true, user: true },
    })
  }

  async getByUser(page: number, limit: number, userId: string) {
    const skip = (page - 1) * limit

    return this.prisma.posts.findMany({
      skip: skip,
      take: Number(limit),
      orderBy: { createdAt: 'desc' },
      include: { comments: true, likes: true, user: true },
      where: {
        userId,
      },
    })
  }
}
