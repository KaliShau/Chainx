import { TypeCreatePost } from '@/shared/models/post.type'
import { useMutation } from '@tanstack/react-query'
import { PostsService } from '../services/posts.service'
import toast from 'react-hot-toast'

export const useCreatePost = () => {
  const { mutate } = useMutation({
    mutationFn: (data: TypeCreatePost) => PostsService.create(data),
    onError: () => {
      toast.error('Error create posts!')
    },
    onSuccess: () => {
      toast.success('Success create posts!')
    }
  })

  return { mutate }
}
