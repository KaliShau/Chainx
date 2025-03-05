import { Module } from '@nestjs/common'
import { LikesService } from './likes.service'
import { LikesController } from './likes.controller'
import { PrismaService } from 'src/prisma/prisma.service'
import { PostsService } from 'src/posts/posts.service'

@Module({
  controllers: [LikesController],
  providers: [LikesService, PrismaService, PostsService],
})
export class LikesModule {}
