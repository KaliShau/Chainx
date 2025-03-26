import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CommentsService } from '../services/comments.service'
import toast from 'react-hot-toast'

export const useDeleteComment = () => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: (id: string) => CommentsService.delete(id),
    onError: () => {
      toast.error('Error delete comment!')
    },
    onSuccess: () => {
      toast.success('Success delete comment!')

      queryClient.invalidateQueries({
        queryKey: ['post']
      })
    }
  })

  return { mutate }
}
