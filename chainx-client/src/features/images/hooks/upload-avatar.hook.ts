import { useMutation } from '@tanstack/react-query'
import { ImagesService } from '../services/images.service'
import toast from 'react-hot-toast'

export const useUploadAvatar = () => {
  const { mutateAsync, data } = useMutation({
    mutationFn: (file: File) => ImagesService.uploadAvatar(file),
    onError: err => {
      toast.error('Error uploads!!!')
    }
  })

  return { mutateAsync, data }
}
