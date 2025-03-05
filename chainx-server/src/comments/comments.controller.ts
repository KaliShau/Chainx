import {
  Body,
  Controller,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { CommentsService } from './comments.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { User } from 'src/auth/decorators/user.decorator'
import { CommentsDto } from './comments.dto'

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Auth()
  @UsePipes(new ValidationPipe())
  @Post(':id')
  async create(
    @Param('id') postId: string,
    @User('id') userId: string,
    @Body() dto: CommentsDto
  ) {
    return this.commentsService.create(dto, userId, postId)
  }
}
