import { axiosClassic } from '@/shared/api/axios.instance'
import { API_URL } from '@/shared/config/api.config'
import { TypeAuthRequest, TypeAuthResponse } from '@/shared/models/auth.type'

export const SignUpService = {
  signUp: async (data: TypeAuthRequest): Promise<TypeAuthResponse> => {
    return (await axiosClassic.post(API_URL.signUp(), data)).data
  }
}
