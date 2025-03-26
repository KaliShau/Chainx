import { User } from '@/pages-fsd/users/user-page'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'User'
}

const UserPage: NextPage = () => {
  return <User />
}

export default UserPage
