import { axiosWithAuth } from '@/shared/api/axios.instance'
import { API_URL } from '@/shared/config/api.config'

export const ToggleLikeService = {
  toggleLike: async (id: string) => {
    return await axiosWithAuth.post(API_URL.toggleLike(id))
  }
}
