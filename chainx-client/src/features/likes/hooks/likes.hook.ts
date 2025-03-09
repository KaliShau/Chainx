import { useMutation, useQueryClient } from '@tanstack/react-query'
import { LikesService } from '../services/likes.service'
import toast from 'react-hot-toast'

export const useLikes = () => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: (id: string) => LikesService.toggleLike(id),
    onSuccess: data => {
      toast.success('Update Like!!!')

      queryClient.invalidateQueries({
        queryKey: ['posts']
      })
    }
  })

  return { mutate }
}
