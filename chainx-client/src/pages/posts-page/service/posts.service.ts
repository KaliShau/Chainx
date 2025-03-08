import { axiosClassic } from '@/shared/api/axios.instance'
import { API_URL } from '@/shared/config/api.config'
import { TypePost } from '@/shared/models/post.type'

export const PostsService = {
  async getAll(pageParam: number | unknown): Promise<TypePost[]> {
    return (await axiosClassic.get(API_URL.posts(pageParam))).data
  }
}
