import { TypeCreateMessage } from '@/shared/models/message.type'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MessagesService } from '../services/messages.service'
import toast from 'react-hot-toast'
import { errorCatch } from '@/shared/api/api.helper'

export const useDeleteMessage = () => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationFn: (id: string) => MessagesService.delete(id),
    onError: err => {
      toast.error(errorCatch(err))
    },
    onSuccess: () => {
      toast.success('Success delete message!')

      queryClient.invalidateQueries({
        queryKey: ['my-messages']
      })
      queryClient.invalidateQueries({
        queryKey: ['sent-messages']
      })
      queryClient.invalidateQueries({
        queryKey: ['received-messages']
      })
    }
  })

  return { mutate }
}
