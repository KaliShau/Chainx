import { UpdateUser } from '@/pages/update-user-page'
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constant'
import { Error } from '@/shared/ui/error/error.ui'
import { Metadata, NextPage } from 'next'
import { useParams } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Update',
  ...NO_INDEX_PAGE
}

const UpdateUserPage: NextPage = () => {
  return <UpdateUser />
}

export default UpdateUserPage
