import { Controller, Param, Post } from '@nestjs/common'
import { LikesService } from './likes.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { User } from 'src/auth/decorators/user.decorator'

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Auth()
  @Post(':id')
  async create(@Param('id') id: string, @User('id') userId: string) {
    return this.likesService.toggle(userId, id)
  }
}
