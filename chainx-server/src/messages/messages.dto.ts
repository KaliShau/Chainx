import { IsString } from 'class-validator'

export class MessagesDto {
  @IsString()
  content: string
}
