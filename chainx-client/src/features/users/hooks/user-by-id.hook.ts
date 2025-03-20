import { useQuery } from '@tanstack/react-query'
import { UsersService } from '../services/users.service'

export const useUserById = (id: string) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [`user-${id}`],
    queryFn: () => UsersService.getById(id)
  })

  return { data, isError, isLoading }
}
