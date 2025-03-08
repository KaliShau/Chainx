'use client'

import { FC, useRef } from 'react'
import styles from './posts.module.scss'
import { Post } from '@/entities/post'
import { usePosts } from '../hooks/posts.hook'
import { Loader } from '@/shared/ui/loader/loader.ui'
import { Error } from '@/shared/ui/error/error.ui'

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
            <Post data={post} key={post.id} />
          ))}
        </div>
      ))}
      {isFetchingNextPage && <Loader />}
    </div>
  )
}
