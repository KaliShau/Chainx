import { TypeUser } from './user.type'

export type TypeAuthRequest = {
  username: string
  password: string
}

export type TypeAuthResponse = {
  user: TypeUser
  accessToken: string
}
