import { useMutation, useQueryClient } from '@tanstack/react-query'
import { PostsService } from '../services/posts.service'
import toast from 'react-hot-toast'

export const useDeletePost = () => {
  const queryClient = useQueryClient()

  const { mutateAsync } = useMutation({
    mutationFn: (id: string) => PostsService.delete(id),
    onError: err => {
      toast.error('Error delete post!')
    },
    onSuccess: () => {
      toast.success('Success delete post!')

      queryClient.invalidateQueries({
        queryKey: ['my-posts']
      })
    }
  })

  return { mutateAsync }
}
