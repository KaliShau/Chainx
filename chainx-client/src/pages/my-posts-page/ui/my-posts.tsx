import { usePosts } from '@/features/posts'
import { useRef } from 'react'
import styles from './my-posts.module.scss'
import { Error } from '@/shared/ui/error/error.ui'
import { Loader } from '@/shared/ui/loader/loader.ui'
import { PostItem } from '@/entities/post'
import { EnumTypeUsePosts } from '@/features/posts/hooks/posts.hook'
import { Button } from '@/shared/ui/button/button.ui'
import { PostCard } from '@/entities/post-card/ui/post-card.ui'

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

  return (
    <div className={styles.root} ref={scrollContainerRef}>
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
    </div>
  )
}
