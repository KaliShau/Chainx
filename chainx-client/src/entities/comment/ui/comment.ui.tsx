import { TypeComment } from '@/shared/models/comment.type'
import { FC } from 'react'

import styles from './comment.module.scss'
import { useDeleteComment } from '@/features/comments'
import { Button } from '@/shared/ui/button/button.ui'
import { Eraser } from 'lucide-react'
import { useUser } from '@/features/tokens'
import { UserCard } from '@/entities/user'

type Type = {
  data: TypeComment
}

export const CommentItem: FC<Type> = ({ data }) => {
  const { user } = useUser()
  const { mutate } = useDeleteComment()

  return (
    <div className={styles.root}>
      <UserCard data={data.user} createDate={data.createdAt} />
      <div>
        <p>{data.content}</p>
        {user?.id === data.userId && (
          <Button onClick={() => mutate(data.id)}>
            <Eraser />
          </Button>
        )}
      </div>
    </div>
  )
}
