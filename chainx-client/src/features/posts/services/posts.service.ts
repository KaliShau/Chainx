import { axiosClassic, axiosWithAuth } from '@/shared/api/axios.instance'
import { API_URL } from '@/shared/config/api.config'
import { TypePost } from '@/shared/models/post.type'

export const PostsService = {
  getById: async (id: string): Promise<TypePost> =>
    (await axiosClassic.get(API_URL.post(id))).data,

  getAll: async (
    pageParam: number | unknown,
    limit: number
  ): Promise<TypePost[]> => {
    return (await axiosClassic.get(API_URL.posts(pageParam, limit))).data
  },

  getByUser: async (
    pageParam: number | unknown,
    limit: number
  ): Promise<TypePost[]> => {
    return (await axiosWithAuth.get(API_URL.postsByUser(pageParam, limit))).data
  }
}
