import { UserCard } from '@/entities/user-card'
import { TypeComment } from '@/shared/models/comment.type'
import { FC } from 'react'

import styles from './comment.module.scss'
import { CreateCommentForm, useDeleteComment } from '@/features/comments'
import { Button } from '@/shared/ui/button/button.ui'
import { Eraser } from 'lucide-react'
import { useAuth } from '@/features/tokens'

type Type = {
  data: TypeComment
}

export const CommentItem: FC<Type> = ({ data }) => {
  const { isAuth } = useAuth()
  const { mutate } = useDeleteComment()

  return (
    <div className={styles.root}>
      <UserCard data={data.user} createDate={data.createdAt} />
      <div>
        <p>{data.content}</p>
        {isAuth?.id === data.userId && (
          <Button onClick={() => mutate(data.id)}>
            <Eraser />
          </Button>
        )}
      </div>
    </div>
  )
}
