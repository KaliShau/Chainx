'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { PostsService } from '../service/posts.service'
import { RefObject, useEffect, useState } from 'react'
import { TypePost } from '@/shared/models/post.type'

export const usePosts = (
  scrollContainerRef: RefObject<HTMLDivElement | null>
) => {
  const limit = 2

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    refetch
  } = useInfiniteQuery<TypePost[]>({
    queryKey: ['posts'],
    queryFn: ({ pageParam = 1 }) => PostsService.getAll(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < limit) return undefined
      return allPages.length + 1
    },
    initialPageParam: 1
  })

  useEffect(() => {
    const scrollContainer = scrollContainerRef?.current
    if (!scrollContainer) return

    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop
      const scrollHeight = scrollContainer.scrollHeight
      const clientHeight = scrollContainer.clientHeight

      const heightScroll = 100

      if (
        scrollHeight - (scrollTop + clientHeight) <= heightScroll * 2 &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage()
      }
    }

    scrollContainer.addEventListener('scroll', handleScroll)
    return () => scrollContainer.removeEventListener('scroll', handleScroll)
  }, [hasNextPage, isFetchingNextPage, fetchNextPage, scrollContainerRef])

  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    refetch
  }
}
