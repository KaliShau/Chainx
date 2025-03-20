import clsx from 'clsx'
import styles from './post.module.scss'
import { Heart, MessageCircle } from 'lucide-react'
import { PUBLIC_ROUTES } from '@/shared/config/routes.config'
import { TypePost } from '@/shared/models/post.type'
import { FC } from 'react'
import Link from 'next/link'

type Type = {
  data: TypePost
  isLike: () => void
}

export const PostInfo: FC<Type> = ({ data, isLike }) => {
  return (
    <>
      <div className={styles.info}>
        <div>
          <Link
            href={PUBLIC_ROUTES.post(data.id)}
            className={clsx({
              [styles.likes]: isLike()
            })}
          >
            <Heart fill='#fff' />
            {data.likes?.length} Likes
          </Link>
        </div>
        <div>
          <Link href={PUBLIC_ROUTES.post(data.id)}>
            <MessageCircle />
            {data.comments?.length} Comments
          </Link>
        </div>
      </div>
      <Link href={PUBLIC_ROUTES.post(data.id)} className={styles.link}>
        Write a comment...
      </Link>
    </>
  )
}
