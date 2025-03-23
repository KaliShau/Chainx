import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { User } from 'src/auth/decorators/user.decorator'
import { UserDto } from './user.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('search')
  async searchByUsername(@Query('username') username: string) {
    return this.usersService.searchByUsername(username)
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.usersService.getById(id)
  }

  @UsePipes(new ValidationPipe())
  @Auth()
  @Patch()
  async update(@User('id') id: string, @Body() dto: UserDto) {
    return this.usersService.update(dto, id)
  }
}
