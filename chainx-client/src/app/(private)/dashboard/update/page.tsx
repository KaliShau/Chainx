import { UpdateUser } from '@/pages-fsd/users/update-user-page'
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constant'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'Update',
  ...NO_INDEX_PAGE
}

const UpdateUserPage: NextPage = () => {
  return <UpdateUser />
}

export default UpdateUserPage
