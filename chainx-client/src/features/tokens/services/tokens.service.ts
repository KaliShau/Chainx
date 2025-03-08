import { axiosClassic } from '@/shared/api/axios.instance'
import { API_URL } from '@/shared/config/api.config'
import { TypeAuthResponse } from '@/shared/models/auth.type'

export const TokenService = {
  async getNewTokens(): Promise<TypeAuthResponse> {
    return (await axiosClassic.post(API_URL.getNewTokens())).data
  }
}
