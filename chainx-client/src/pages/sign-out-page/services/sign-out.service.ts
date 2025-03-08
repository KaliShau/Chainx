import { axiosClassic } from '@/shared/api/axios.instance'
import { API_URL } from '@/shared/config/api.config'

export const SignOutService = {
  signOut: async () => {
    return (await axiosClassic.post(API_URL.signOut())).data
  }
}
