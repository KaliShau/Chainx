import apiConfig from '@/shared/config/api.config'
import { Axios } from '@/shared/instance/axios.instance'
import { TypePost } from '@/shared/models/post.type'

export const PostsService = {
  async getAll(pageParam: number | unknown): Promise<TypePost[]> {
    return (await Axios.get(`${apiConfig.posts}?page=${pageParam}`)).data
  },
}
