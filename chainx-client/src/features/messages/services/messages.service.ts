import { axiosWithAuth } from '@/shared/api/axios.instance'
import { API_URL } from '@/shared/config/api.config'
import { TypeCreateMessage, TypeMessage } from '@/shared/models/message.type'

export const MessagesService = {
  getMy: async (
    pageParam: number | unknown,
    limit: number
  ): Promise<TypeMessage[]> =>
    (await axiosWithAuth.get(API_URL.messagesMy(pageParam, limit))).data,

  getSender: async (
    pageParam: number | unknown,
    limit: number
  ): Promise<TypeMessage[]> =>
    (await axiosWithAuth.get(API_URL.messagesSender(pageParam, limit))).data,

  getReceiver: async (
    pageParam: number | unknown,
    limit: number
  ): Promise<TypeMessage[]> =>
    (await axiosWithAuth.get(API_URL.messagesReceiver(pageParam, limit))).data,

  getById: async (id: string): Promise<TypeMessage> =>
    (await axiosWithAuth.get(API_URL.messagesById(id))).data,

  create: async (id: string, data: TypeCreateMessage) =>
    (await axiosWithAuth.post(API_URL.messagesCreate(id), data)).data,

  delete: async (id: string) =>
    (await axiosWithAuth.delete(API_URL.messagesDelete(id))).data
}
