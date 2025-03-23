import { TypeCreateMessage } from '@/shared/models/message.type'
import { useMutation } from '@tanstack/react-query'
import { MessagesService } from '../services/messages.service'
import toast from 'react-hot-toast'
import { errorCatch } from '@/shared/api/api.helper'

type Type = {
  data: TypeCreateMessage
  id: string
}

export const useCreateMessage = () => {
  const { mutate } = useMutation({
    mutationFn: ({ data, id }: Type) => MessagesService.create(id, data),
    onError: err => {
      toast.error(errorCatch(err))
    },
    onSuccess: () => {
      toast.success('Success create message!')
    }
  })

  return { mutate }
}
