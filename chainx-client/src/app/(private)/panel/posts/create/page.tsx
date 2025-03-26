import { CreatePostPage } from '@/pages-fsd/posts/create-post-page'
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constant'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'Create post',
  ...NO_INDEX_PAGE
}

const DashboardPostsCreatePage: NextPage = () => {
  return <CreatePostPage />
}

export default DashboardPostsCreatePage
