import { axiosWithAuth } from '@/shared/api/axios.instance'
import { TypeUpdateUser } from '../models/update-user.type'
import { TypeUser } from '@/shared/models/user.type'
import { API_URL } from '@/shared/config/api.config'

export const UpdateUserService = {
  update: async (data: TypeUpdateUser & Pick<TypeUser, 'imageUrl'>) =>
    (await axiosWithAuth.patch(API_URL.updateUser(), data)).data
}
