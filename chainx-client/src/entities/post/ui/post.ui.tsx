'use client'

import { FC } from 'react'
import styles from './post.module.scss'
import { TypePost } from '@/shared/models/post.type'
import Image from 'next/image'
import { Heart, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { PUBLIC_ROUTES } from '@/shared/config/routes.config'
import { useAuth } from '@/features/tokens'
import clsx from 'clsx'
import { useToggleLike } from '@/features/toggle-like/hooks/toggle-like.hook'
import { UserCardPost } from './user-card-post.ui'

type Type = {
  data: TypePost
}

export const Post: FC<Type> = ({ data }) => {
  const { isAuth } = useAuth()
  const { mutate } = useToggleLike()

  const isLike = () => {
    if (!isAuth) return

    const like = data.likes?.filter(like => like.userId === isAuth.id)

    return like?.length == 1
  }

  const toggleLike = () => {
    if (isAuth) {
      mutate(data.id)
    }
  }

  return (
    <div className={styles.root}>
      <UserCardPost data={data} />
      <Link href={PUBLIC_ROUTES.post(data.id)}>{data.content}</Link>
      <Link href={PUBLIC_ROUTES.post(data.id)}>
        <Image
          priority={true}
          alt='Post image'
          src={data.imageUrl}
          width={1000}
          height={500}
        />
      </Link>
      <div className={styles.info}>
        <div>
          <button
            className={clsx({
              [styles.likes]: isLike()
            })}
            onClick={toggleLike}
          >
            <Heart fill='#fff' />
            {data.likes?.length} Likes
          </button>
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
    </div>
  )
}
