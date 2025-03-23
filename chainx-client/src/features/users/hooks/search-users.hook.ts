import { useMutation, useQuery } from '@tanstack/react-query'
import { UsersService } from '../services/users.service'

export const useSearchUsers = () => {
  const { mutateAsync, data, isPending } = useMutation({
    mutationFn: (username: string) => UsersService.searchByUsername(username)
  })

  return { data, mutateAsync, isPending }
}
