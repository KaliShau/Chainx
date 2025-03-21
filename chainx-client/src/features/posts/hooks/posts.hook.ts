'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { RefObject, useEffect, useState } from 'react'
import { TypePost } from '@/shared/models/post.type'
import { PostsService } from '../services/posts.service'

export enum EnumTypeUsePosts {
  ALL = 'All',
  USER = 'User'
}

type Type = {
  scrollContainerRef: RefObject<HTMLDivElement | null>
  limit?: number
  infiniteScroll?: boolean
  type?: EnumTypeUsePosts
}

export const usePosts = ({
  scrollContainerRef,
  infiniteScroll = true,
  limit = 2,
  type = EnumTypeUsePosts.ALL
}: Type) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    refetch
  } = useInfiniteQuery<TypePost[]>({
    queryKey: [type == EnumTypeUsePosts.ALL ? 'posts' : 'my-posts'],
    queryFn: ({ pageParam = 1 }) =>
      type == EnumTypeUsePosts.ALL
        ? PostsService.getAll(pageParam, limit)
        : PostsService.getByUser(pageParam, limit),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < limit) return undefined
      return allPages.length + 1
    },
    initialPageParam: 1
  })

  if (infiniteScroll) {
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
  }

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
