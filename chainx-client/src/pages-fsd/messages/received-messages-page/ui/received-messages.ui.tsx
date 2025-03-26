'use client'

import styles from './received-messages.module.scss'
import { Layout } from '@/shared/ui/layout/layout.ui'
import { useAuth } from '@/features/tokens/hooks/auth.hook'
import { Loader } from '@/shared/ui/loader/loader.ui'
import { Error } from '@/shared/ui/error/error.ui'
import { Button } from '@/shared/ui/button/button.ui'
import { Table } from '@/widgets/table'
import { TypeTableHead, TypeTableRow } from '@/widgets/table/models/table.type'
import { dateFormat } from '@/shared/utils/date-format.utils'
import { useReceivedMessages } from '@/features/messages'
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '@/shared/config/routes.config'

const Head: TypeTableHead[] = [
  { title: 'Created at' },
  { title: 'Sender' },
  { title: 'Content' },
  { title: 'Receiver' },
  { title: 'Action' }
]

export const ReceivedMessages = () => {
  const {
    data,
    isError,
    isLoading,
    isFetchingNextPage,
    refetch,
    fetchNextPage,
    hasNextPage
  } = useReceivedMessages()

  const auth = useAuth()

  if (auth) {
    return auth
  }

  const TableData: TypeTableRow<TypeTableHead[]>[] =
    data?.pages.flatMap(page =>
      page.map(message => ({
        row: [
          {
            title: dateFormat(message.createdAt),
            link: PRIVATE_ROUTES.messagesById(message.id),
            id: message.id
          },
          {
            title: message.sender.username,
            link: PUBLIC_ROUTES.user(message.senderId),
            id: message.id
          },
          {
            title: message.content,
            link: PRIVATE_ROUTES.messagesById(message.id),
            id: message.id
          },
          {
            title: message.receiver.username,
            link: PUBLIC_ROUTES.user(message.receiverId),
            id: message.id
          },
          { id: message.id }
        ]
      }))
    ) || []

  console.log(TableData)

  return (
    <Layout className={styles.root}>
      <h2>Received messages</h2>
      {isLoading && <Loader />}

      {isError && <Error refetch={refetch} />}

      <Table head={Head} rows={TableData} />
      {isFetchingNextPage && <Loader />}
      {hasNextPage && <Button onClick={() => fetchNextPage()}>Next</Button>}
    </Layout>
  )
}
