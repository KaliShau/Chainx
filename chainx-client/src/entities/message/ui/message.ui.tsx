import { TypeMessage } from '@/shared/models/message.type'
import { dateFormat } from '@/shared/utils/date-format.utils'
import { FC } from 'react'
import styles from './message.module.scss'

export const MessageItem: FC<{ data: TypeMessage }> = ({ data }) => {
  return (
    <div className={styles.root}>
      <p>{dateFormat(data.createdAt)}</p>
      <div>
        <p>
          Receiver: {data.receiver.firstName} {data.receiver.lastName}
        </p>
        <p>
          Sender: {data.sender.firstName} {data.sender.lastName}
        </p>
      </div>
      <h3>Content</h3>
      <h4>{data.content}</h4>
    </div>
  )
}
