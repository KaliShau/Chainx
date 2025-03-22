import { TypeCreatePost } from '@/shared/models/post.type'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { PostsService } from '../services/posts.service'
import toast from 'react-hot-toast'

export const useCreatePost = () => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: (data: TypeCreatePost) => PostsService.create(data),
    onError: err => {
      toast.error('Error create posts!')
    },
    onSuccess: () => {
      toast.success('Success create posts!')

      // queryClient.invalidateQueries({
      //   queryKey: ['post']
      // })
    }
  })

  return { mutate }
}
