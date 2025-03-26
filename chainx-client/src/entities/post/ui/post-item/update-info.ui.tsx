import { FC } from 'react'
import styles from './post.module.scss'
import { Heart } from 'lucide-react'
import { TypePost } from '@/shared/models/post.type'
import { CommentItem } from '@/entities/comment'
import { CreateCommentForm } from '@/features/comments'
import { TypeUser } from '@/shared/models/user.type'
import { cn } from '@/shared/utils/classnames.utils'

type Type = {
  data: TypePost
  toggleLike: () => void
  isLike: () => boolean | undefined
  user: TypeUser | undefined
}

export const UpdateInfoPost: FC<Type> = ({
  toggleLike,
  data,
  isLike,
  user
}) => {
  return (
    <div className={styles.update}>
      <button className={cn({ [styles.likes]: isLike() })} onClick={toggleLike}>
        <Heart /> {data.likes?.length} Likes
      </button>
      <div className={styles.comments}>
        <h4>
          Comments: <p>{data.comments?.length}</p>
        </h4>
        {user && <CreateCommentForm postId={data.id} />}
        {data.comments?.length != 0 ? (
          data.comments?.map(comment => (
            <CommentItem data={comment} key={comment.id} />
          ))
        ) : (
          <p>No comments...</p>
        )}
      </div>
    </div>
  )
}
