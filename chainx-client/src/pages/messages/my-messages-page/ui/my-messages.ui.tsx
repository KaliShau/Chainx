'use client'

import styles from './my-messages.module.scss'
import { Layout } from '@/shared/ui/layout/layout.ui'
import { useMyMessages } from '@/features/messages/hooks/my-messages.hook'
import { useAuth } from '@/features/tokens/hooks/auth.hook'
import { Loader } from '@/shared/ui/loader/loader.ui'
import { Error } from '@/shared/ui/error/error.ui'
import { MessageItem } from '@/entities/message'
import { Button } from '@/shared/ui/button/button.ui'
import { Table } from '@/widgets/table'
import { TypeTableHead, TypeTableRow } from '@/widgets/table/models/table.type'
import { dateFormat } from '@/shared/utils/date-format.utils'

const Head: TypeTableHead[] = [
  { title: 'Created at' },
  { title: 'Sender' },
  { title: 'Content' },
  { title: 'Receiver' },
  { title: 'Action' }
]

export const MyMessages = () => {
  const {
    data,
    isError,
    isLoading,
    isFetchingNextPage,
    refetch,
    fetchNextPage,
    hasNextPage
  } = useMyMessages()

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
            link: message.id,
            id: message.id
          },
          {
            title: message.sender.username,
            link: message.senderId,
            id: message.id
          },
          { title: message.content, link: message.id, id: message.id },
          {
            title: message.receiver.username,
            id: message.id,
            link: message.id
          },
          { actionTitle: 'Delete', id: message.id }
        ]
      }))
    ) || []

  return (
    <Layout className={styles.root}>
      <h2>My messages</h2>
      {isLoading && <Loader />}

      {isError && <Error refetch={refetch} />}

      <Table head={Head} rows={TableData} />
      {isFetchingNextPage && <Loader />}
      {hasNextPage && <Button onClick={() => fetchNextPage()}>Next</Button>}
    </Layout>
  )

  return <div></div>
}
