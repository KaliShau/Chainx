'use client'

import { usePostById } from '@/features/posts'
import { Error } from '@/shared/ui/error/error.ui'
import { Loader } from '@/shared/ui/loader/loader.ui'
import { PostItem } from '@/entities/post'
import styles from './post.module.scss'

export const Post = ({ id }: { id: string | string[] }) => {
  const { data, isError, isLoading } = usePostById(id as string)

  if (isError) {
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
