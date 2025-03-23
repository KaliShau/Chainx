import { User } from '@/pages/users/user-page'
import { Error } from '@/shared/ui/error/error.ui'
import { Metadata, NextPage } from 'next'
import { useParams } from 'next/navigation'

export const metadata: Metadata = {
  title: 'User'
}

const UserPage: NextPage = () => {
  return <User />
}

export default UserPage
