'use client'

import { usePostById } from '@/features/posts'
import { Error } from '@/shared/ui/error/error.ui'
import { Loader } from '@/shared/ui/loader/loader.ui'
import { PostItem } from '@/entities/post'
import styles from './post.module.scss'
import { useParams } from 'next/navigation'

export const Post = () => {
  const param = useParams()
  const { data, isError, isLoading } = usePostById(param?.id as string)

  if (isError || !param) {
    return <Error />
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className={styles.root}>
      {data && <PostItem update={true} data={data} />}
    </div>
  )
}
