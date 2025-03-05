import { BadRequestException, Injectable } from '@nestjs/common'
import { PostsService } from 'src/posts/posts.service'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class LikesService {
  constructor(
    private prisma: PrismaService,
    private postsService: PostsService
  ) {}

  async toggle(userId: string, postId: string) {
    const post = await this.postsService.getById(postId)

    if (!post) throw new BadRequestException('Post not found!')

    const existingLike = await this.prisma.likes.findFirst({
      where: { postId, userId },
    })

    if (existingLike) {
      await this.prisma.likes.delete({ where: { id: existingLike.id } })
      return { message: 'Like removed!' }
    } else {
      await this.prisma.likes.create({ data: { userId, postId } })
      return { message: 'Like added!' }
    }
  }
}
