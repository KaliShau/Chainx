import { Posts } from '@/pages-fsd/posts/posts-page'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'Posts'
}

const PostsPage: NextPage = () => {
  return <Posts />
}

export default PostsPage
