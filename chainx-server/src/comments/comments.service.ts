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

  async create(dto: CommentsDto, userId: string, postId: string) {
    const post = await this.postsService.getById(postId)

    if (!post) throw new BadRequestException('Post not found!')

    return this.prisma.comments.create({
      data: { content: dto.content, postId, userId },
    })
  }
}
