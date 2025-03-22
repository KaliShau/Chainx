import { useMutation } from '@tanstack/react-query'
import { ImagesService } from '../services/images.service'
import toast from 'react-hot-toast'

export enum EnumUploadImage {
  AVATAR = 'Avatar',
  POST = 'Post'
}

type Type = {
  type: EnumUploadImage
}

export const useUploadImage = ({ type }: Type) => {
  const { mutateAsync, data } = useMutation({
    mutationFn: (file: File) => {
      switch (type) {
        case EnumUploadImage.AVATAR:
          return ImagesService.uploadAvatar(file)
        case EnumUploadImage.POST:
          return ImagesService.uploadPostImage(file)
      }
    },
    onError: err => {
      toast.error('Error uploads!!!')
    }
  })

  return { mutateAsync, data }
}
