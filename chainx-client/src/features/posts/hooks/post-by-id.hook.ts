import { useQuery } from '@tanstack/react-query'
import { PostsService } from '../services/posts.service'

export const usePostById = (id: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['post'],
    queryFn: () => PostsService.getById(id),
    staleTime: 0
  })

  return { data, isError, isLoading }
}
