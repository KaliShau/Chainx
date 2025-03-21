export type TypeUser = {
  id: string
  createdAt: string
  updatedAt: string
  username: string
  passwordHash: string
  firstName: string
  lastName: string
  imageUrl: string
}

export type TypeUpdateUser = {
  username: string
  firstName: string
  lastName: string
}
