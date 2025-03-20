import { TypeUser } from './user.type'

export type TypeComment = {
  id: string
  createdAt: string
  updatedAt: string
  content: string
  user: TypeUser
  userId: string
  postId: string
}

export type TypeCreateComment = {
  content: string
}
