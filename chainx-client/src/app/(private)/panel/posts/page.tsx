import { MyPosts } from '@/pages-fsd/posts/my-posts-page'
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constant'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'My posts',
  ...NO_INDEX_PAGE
}

const DashboardPostsPage: NextPage = () => {
  return <MyPosts />
}

export default DashboardPostsPage
