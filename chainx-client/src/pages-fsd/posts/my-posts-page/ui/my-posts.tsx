'use client'

import { usePosts } from '@/features/posts'
import { RefObject, useRef } from 'react'
import styles from './my-posts.module.scss'
import { Error } from '@/shared/ui/error/error.ui'
import { Loader } from '@/shared/ui/loader/loader.ui'
import { PostCard, PostItem } from '@/entities/post'
import { EnumTypeUsePosts } from '@/features/posts/hooks/posts.hook'
import { Button } from '@/shared/ui/button/button.ui'
import { useAuth } from '@/features/tokens/hooks/auth.hook'
import { Layout } from '@/shared/ui/layout/layout.ui'

export const MyPosts = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const {
    data,
    isError,
    isLoading,
    isFetchingNextPage,
    refetch,
    fetchNextPage,
    hasNextPage
  } = usePosts({
    scrollContainerRef,
    type: EnumTypeUsePosts.USER,
    infiniteScroll: false,
    limit: 4
  })

  const auth = useAuth()

  if (auth) {
    return auth
  }

  return (
    <Layout className={styles.root} ref={scrollContainerRef}>
      <h2>My posts</h2>
      {isLoading && <Loader />}

      {isError && <Error refetch={refetch} />}

      {data?.pages.map((page, pageIndex) => (
        <div className={styles.posts} key={pageIndex}>
          {page.map(post => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      ))}
      {isFetchingNextPage && <Loader />}
      {hasNextPage && <Button onClick={() => fetchNextPage()}>Next</Button>}
    </Layout>
  )
}
