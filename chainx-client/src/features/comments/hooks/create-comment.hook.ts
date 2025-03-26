import { TypeCreateComment } from '@/shared/models/comment.type'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CommentsService } from '../services/comments.service'
import toast from 'react-hot-toast'

type Type = {
  data: TypeCreateComment
  id: string
}

export const useCreateComment = () => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: (props: Type) => CommentsService.create(props.data, props.id),
    onError: () => {
      toast.error('Error create comment!')
    },
    onSuccess: () => {
      toast.success('Success create comment!')

      queryClient.invalidateQueries({
        queryKey: ['post']
      })
    }
  })

  return { mutate }
}
