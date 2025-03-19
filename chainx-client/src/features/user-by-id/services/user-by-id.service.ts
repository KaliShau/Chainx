import { axiosClassic } from '@/shared/api/axios.instance'
import { API_URL } from '@/shared/config/api.config'
import { TypeUser } from '@/shared/models/user.type'

export const UserByIdService = {
  getById: async (id: string): Promise<TypeUser> =>
    (await axiosClassic.get(API_URL.userById(id))).data
}
