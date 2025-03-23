import { TypeMessage } from '@/shared/models/message.type'
import { dateFormat } from '@/shared/utils/date-format.utils'
import { FC } from 'react'

export const MessageItem: FC<{ data: TypeMessage }> = ({ data }) => {
  return (
    <div>
      <p>{dateFormat(data.createdAt)}</p>
      <h3>{data.content}</h3>
    </div>
  )
}
