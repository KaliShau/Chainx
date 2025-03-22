import { axiosWithAuth } from '@/shared/api/axios.instance'
import { API_URL } from '@/shared/config/api.config'

export const ImagesService = {
  uploadAvatar: async (file: File): Promise<{ url: string }> => {
    const formData = new FormData()
    formData.append('avatar', file)
    return (
      await axiosWithAuth.post(API_URL.uploadAvatar(), formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    ).data
  },

  uploadPostImage: async (file: File): Promise<{ url: string }> => {
    const formData = new FormData()
    formData.append('post', file)
    return (
      await axiosWithAuth.post(API_URL.uploadPostImage(), formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    ).data
  }
}
