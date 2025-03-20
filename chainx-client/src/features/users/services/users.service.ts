import { axiosClassic, axiosWithAuth } from '@/shared/api/axios.instance'
import { API_URL } from '@/shared/config/api.config'
import { TypeUpdateUser, TypeUser } from '@/shared/models/user.type'

export const UsersService = {
  getById: async (id: string): Promise<TypeUser> =>
    (await axiosClassic.get(API_URL.userById(id))).data,

  update: async (data: TypeUpdateUser & Pick<TypeUser, 'imageUrl'>) =>
    (await axiosWithAuth.patch(API_URL.updateUser(), data)).data
}
