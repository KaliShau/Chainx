import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { PostsService } from './posts.service'
import { PostsDto } from './dto.posts'
import { User } from 'src/auth/decorators/user.decorator'
import { Auth } from 'src/auth/decorators/auth.decorator'

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Auth()
  @UsePipes(new ValidationPipe())
  @Post()
  async create(@Body() dto: PostsDto, @User('id') id: string) {
    this.postsService.create(id, dto)

    return { message: 'Successfully' }
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.postsService.getById(id)
  }

  @Get()
  async getAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10
  ) {
    return this.postsService.getAll(page, limit)
  }
}
