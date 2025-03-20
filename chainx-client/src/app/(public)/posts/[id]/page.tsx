'use client'

import { Post } from '@/pages/post-page'
import { Error } from '@/shared/ui/error/error.ui'
import { NextPage } from 'next'
import { useParams } from 'next/navigation'

const PostPage: NextPage = () => {
  const param = useParams()

  if (!param) {
    return <Error />
  }

  return <Post id={param.id} />
}

export default PostPage
