import { useQuery } from '@tanstack/react-query'
import { MessagesService } from '../services/messages.service'

export const useMessageById = (id: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['message'],
    queryFn: () => MessagesService.getById(id),
    staleTime: 0
  })

  return { data, isError, isLoading }
}
