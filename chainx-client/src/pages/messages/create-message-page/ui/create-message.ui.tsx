import { CreateMessageForm } from '@/features/messages'
import styles from './create-message.module.scss'
import { Layout } from '@/shared/ui/layout/layout.ui'

export const CreateMessage = () => {
  return (
    <Layout>
      <h2>Create message</h2>
      <CreateMessageForm />
    </Layout>
  )
}
