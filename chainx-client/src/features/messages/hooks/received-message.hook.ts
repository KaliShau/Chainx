'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { MessagesService } from '../services/messages.service'
import { TypeMessage } from '@/shared/models/message.type'

export const useReceivedMessages = () => {
  const limit = 8

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
    refetch
  } = useInfiniteQuery<TypeMessage[]>({
    queryKey: ['received-messages'],
    queryFn: ({ pageParam = 1 }) =>
      MessagesService.getReceiver(pageParam, limit),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < limit) return undefined
      return allPages.length + 1
    },
    initialPageParam: 1
  })

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
