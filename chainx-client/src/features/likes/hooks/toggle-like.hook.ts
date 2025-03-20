import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ToggleLikeService } from '../services/likes.service'
import toast from 'react-hot-toast'

export const useToggleLike = () => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: (id: string) => ToggleLikeService.toggleLike(id),
    onSuccess: data => {
      toast.success('Update Like!!!')

      queryClient.invalidateQueries({
        queryKey: ['post']
      })
    }
  })

  return { mutate }
}
