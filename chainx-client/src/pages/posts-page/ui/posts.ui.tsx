'use client'

import { FC, useRef } from 'react'
import styles from './posts.module.scss'
import { Post } from '@/entities/post'
import { usePosts } from '../hooks/posts.hook'
import { PostsService } from '../api/posts.service'
import { TypePost } from '@/shared/models/post.type'

export const Posts: FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const { data, isError, isLoading, isFetchingNextPage } =
    usePosts(scrollContainerRef)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error...</div>
  }

  return (
    <div className={styles.root} ref={scrollContainerRef}>
      {data?.pages.map((page, pageIndex) => (
        <div className={styles.posts} key={pageIndex}>
          {page.map(post => (
            <Post data={post} key={post.id} />
          ))}
        </div>
      ))}
    </div>
  )
}
