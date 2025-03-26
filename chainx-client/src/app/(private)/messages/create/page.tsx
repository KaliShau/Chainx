import { CreateMessage } from '@/pages-fsd/messages/create-message-page'
import { NO_INDEX_PAGE } from '@/shared/constants/seo.constant'
import { Metadata, NextPage } from 'next'

export const metadata: Metadata = {
  title: 'Create message',
  ...NO_INDEX_PAGE
}
const CreateMassagesPage: NextPage = () => {
  return <CreateMessage />
}

export default CreateMassagesPage
