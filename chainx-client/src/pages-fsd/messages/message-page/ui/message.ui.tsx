'use client'

import { useParams } from 'next/navigation'
import styles from './message.module.scss'
import { useMessageById } from '@/features/messages/hooks/by-id-message.hook'
import { Error } from '@/shared/ui/error/error.ui'
import { Loader } from '@/shared/ui/loader/loader.ui'
import { MessageItem } from '@/entities/message'

export const Message = () => {
  const param = useParams()
  const { data, isError, isLoading } = useMessageById(param?.id as string)

  if (isError || !param) {
    return <Error />
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className={styles.root}>{data && <MessageItem data={data} />}</div>
  )
}
