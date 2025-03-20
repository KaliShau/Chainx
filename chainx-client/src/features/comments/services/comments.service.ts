import { axiosWithAuth } from '@/shared/api/axios.instance'
import { API_URL } from '@/shared/config/api.config'
import { TypeCreateComment } from '@/shared/models/comment.type'

export const CommentsService = {
  create: async (data: TypeCreateComment, id: string) =>
    (await axiosWithAuth.post(API_URL.createComment(id), data)).data,

  delete: async (id: string) =>
    (await axiosWithAuth.delete(API_URL.deleteComment(id))).data
}
