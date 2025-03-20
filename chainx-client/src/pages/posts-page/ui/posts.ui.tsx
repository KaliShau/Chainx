'use client'

import { FC, useRef } from 'react'
import styles from './posts.module.scss'
import { Loader } from '@/shared/ui/loader/loader.ui'
import { Error } from '@/shared/ui/error/error.ui'
import { usePosts } from '@/features/posts/hooks/posts.hook'
import { PostItem } from '@/entities/post'

export const Posts: FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const { data, isError, isLoading, isFetchingNextPage, refetch } =
    usePosts(scrollContainerRef)

  return (
    <div className={styles.root} ref={scrollContainerRef}>
      {isLoading && <Loader />}

      {isError && <Error refetch={refetch} />}

      {data?.pages.map((page, pageIndex) => (
        <div className={styles.posts} key={pageIndex}>
          {page.map(post => (
            <PostItem data={post} key={post.id} />
          ))}
        </div>
      ))}
      {isFetchingNextPage && <Loader />}
    </div>
  )
}
