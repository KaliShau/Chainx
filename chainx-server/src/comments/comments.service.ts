import { BadRequestException, Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CommentsDto } from './comments.dto'
import { PostsService } from 'src/posts/posts.service'

@Injectable()
export class CommentsService {
  constructor(
    private prisma: PrismaService,
    private postsService: PostsService
  ) {}

  async getById(id: string) {
    const comment = await this.prisma.comments.findUnique({ where: { id } })

    if (!comment) throw new BadRequestException('Comment not found!')

    return comment
  }

  async create(dto: CommentsDto, userId: string, postId: string) {
    const post = await this.postsService.getById(postId)

    if (!post) throw new BadRequestException('Post not found!')

    return this.prisma.comments.create({
      data: { content: dto.content, postId, userId },
    })
  }

  async delete(userId: string, commentId: string) {
    const comment = await this.getById(commentId)

    await this.prisma.comments.delete({
      where: { id: commentId, userId },
    })

    return { message: 'Delete successful!' }
  }
}
