import { useMutation } from '@tanstack/react-query'
import { TypeUpdateUser } from '../models/update-user.type'
import { TypeUser } from '@/shared/models/user.type'
import { UpdateUserService } from '../services/update-user.service'
import toast from 'react-hot-toast'

export const useUpdateUser = () => {
  const { mutateAsync } = useMutation({
    mutationFn: (data: TypeUpdateUser & Pick<TypeUser, 'imageUrl'>) =>
      UpdateUserService.update(data),
    onError: err => {
      toast.error('Error save data!!!')
    },
    onSuccess: () => {
      toast.success('Save successful!!!')
    }
  })

  return { mutateAsync }
}
