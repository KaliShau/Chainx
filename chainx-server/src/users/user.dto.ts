import { IsString } from 'class-validator'

export class UserDto {
  @IsString()
  username: string

  @IsString()
  firstName: string

  @IsString()
  lastName: string

  @IsString()
  imageUrl: string
}
