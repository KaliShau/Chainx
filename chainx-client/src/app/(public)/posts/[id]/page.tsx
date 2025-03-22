import { Post } from '@/pages/post-page'
import { Error } from '@/shared/ui/error/error.ui'
import { Metadata, NextPage } from 'next'
import { useParams } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Post'
}

const PostPage: NextPage = () => {
  return <Post />
}

export default PostPage
