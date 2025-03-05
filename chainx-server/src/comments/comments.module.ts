import { Module } from '@nestjs/common'
import { CommentsService } from './comments.service'
import { CommentsController } from './comments.controller'
import { PrismaService } from 'src/prisma/prisma.service'
import { PostsService } from 'src/posts/posts.service'

@Module({
  controllers: [CommentsController],
  providers: [CommentsService, PrismaService, PostsService],
})
export class CommentsModule {}
