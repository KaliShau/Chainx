'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { PostsService } from '../api/posts.service'
import { useEffect } from 'react'
import { TypePost } from '@/shared/models/post.type'

type ApiResponse = {
  pages: {
    data: TypePost[]
  }
}

export const usePosts = () => {
  const limit = 10

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  } = useInfiniteQuery<ApiResponse>({
    queryKey: ['posts'],
    queryFn: ({ pageParam = 1 }) => PostsService.getAll(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.pages.data.length < limit) return undefined
      return allPages.length + 1
    },
    initialPageParam: 1,
  })

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 100 &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    error,
  }
}
