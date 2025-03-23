import { TypeUser } from './user.type'

export type TypeMessage = {
  id: string
  createdAt: string
  updatedAt: string
  content: string
  senderId: string
  receiverId: string
  deletedBySenderAt: any
  deletedByReceiverAt: any
  receiver: TypeUser
  sender: TypeUser
}

export type TypeCreateMessage = {
  content: string
}
