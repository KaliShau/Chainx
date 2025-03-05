import { TypeComment } from './comment.type'
import { TypeLike } from './like.type'
import { TypeUser } from './user.type'

export type TypePost = {
  id: string
  createdAt: string
  updatedAt: string
  title: string
  content: string
  imageUrl: string
  userId: string
  comments?: TypeComment[]
  likes?: TypeLike[]
  user: TypeUser
}
