'use client'

import { FC } from 'react'
import styles from './post.module.scss'
import { TypePost } from '@/shared/models/post.type'
import Image from 'next/image'
import Link from 'next/link'
import { PUBLIC_ROUTES } from '@/shared/config/routes.config'
import { useAuth } from '@/features/tokens'
import { useToggleLike } from '@/features/likes/hooks/toggle-like.hook'
import { PostInfo } from './info.ui'
import { UpdateInfoPost } from './update-info.ui'
import { UserCard } from '@/entities/user'

type Type = {
  data: TypePost
  update?: boolean
}

export const PostItem: FC<Type> = ({ data, update = false }) => {
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
      <UserCard data={data.user} createDate={data.createdAt} />
      <Link href={PUBLIC_ROUTES.post(data.id)}>
        <h2>{data.title}</h2>
      </Link>
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
      {!update ? (
        <PostInfo data={data} isLike={isLike} />
      ) : (
        <UpdateInfoPost
          isAuth={isAuth}
          toggleLike={toggleLike}
          isLike={isLike}
          data={data}
        />
      )}
    </div>
  )
}
