import { IsString } from 'class-validator'

export class PostsDto {
  @IsString()
  title: string

  @IsString()
  content: string

  @IsString()
  imageUrl: string
}
