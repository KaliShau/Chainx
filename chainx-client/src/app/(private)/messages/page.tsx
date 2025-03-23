import { MyMessages } from '@/pages/messages/my-messages-page'
import { Metadata, NextPage } from 'next'
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constant'

export const metadata: Metadata = {
  title: 'My messages',
  ...NO_INDEX_PAGE
}

const MessagePage: NextPage = () => {
  return <MyMessages />
}

export default MessagePage
