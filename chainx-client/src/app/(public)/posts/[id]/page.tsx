import { Post } from '@/pages/posts/post-page'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'Post'
}

const PostPage: NextPage = () => {
  return <Post />
}

export default PostPage
