import { useQuery } from '@tanstack/react-query'
import { UserByIdService } from '../services/user-by-id.service'

export const useUserById = (id: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['post'],
    queryFn: () => UserByIdService.getById(id),
    staleTime: 0
  })

  return { data, isError, isLoading }
}
