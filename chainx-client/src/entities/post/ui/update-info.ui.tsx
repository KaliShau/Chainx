import { FC } from 'react'
import styles from './post.module.scss'
import { Heart } from 'lucide-react'
import { TypePost } from '@/shared/models/post.type'
import clsx from 'clsx'
import { CommentItem } from '@/entities/comment'
import { CreateCommentForm } from '@/features/comments'
import { TypeAuthResponse } from '@/shared/models/auth.type'
import { TypeUser } from '@/shared/models/user.type'

type Type = {
  data: TypePost
  toggleLike: () => void
  isLike: () => boolean | undefined
  isAuth: TypeUser | undefined
}

export const UpdateInfoPost: FC<Type> = ({
  toggleLike,
  data,
  isLike,
  isAuth
}) => {
  return (
    <div className={styles.update}>
      <button
        className={clsx({ [styles.likes]: isLike() })}
        onClick={toggleLike}
      >
        <Heart /> {data.likes?.length} Likes
      </button>
      <div className={styles.comments}>
        <h4>
          Comments: <p>{data.comments?.length}</p>
        </h4>
        {isAuth && <CreateCommentForm postId={data.id} />}
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
