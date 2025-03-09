import { axiosWithAuth } from '@/shared/api/axios.instance'
import { API_URL } from '@/shared/config/api.config'

export const LikesService = {
  toggleLike: async (id: string) => {
    return await axiosWithAuth.post(API_URL.toggleLike(id))
  }
}
