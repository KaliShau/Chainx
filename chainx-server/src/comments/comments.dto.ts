import { IsString } from 'class-validator'

export class CommentsDto {
  @IsString()
  content: string
}
