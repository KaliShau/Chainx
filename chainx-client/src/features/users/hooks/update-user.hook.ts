import { useMutation } from '@tanstack/react-query'
import { TypeUpdateUser, TypeUser } from '@/shared/models/user.type'
import toast from 'react-hot-toast'
import { UsersService } from '../services/users.service'

export const useUpdateUser = () => {
  const { mutateAsync } = useMutation({
    mutationFn: (data: TypeUpdateUser & Pick<TypeUser, 'imageUrl'>) =>
      UsersService.update(data),
    onError: err => {
      toast.error('Error save data!!!')
    },
    onSuccess: () => {
      toast.success('Save successful!!!')
    }
  })

  return { mutateAsync }
}
