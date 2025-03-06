import { FC } from 'react'
import styles from './post.module.scss'
import { TypePost } from '@/shared/models/post.type'
import Image from 'next/image'
import { dateFormat } from '@/shared/utils/dateFormat.utils'
import { Heart, MessageCircle } from 'lucide-react'
import clsx from 'clsx'
import Link from 'next/link'
import routesConfig from '@/shared/config/routes.config'

type Type = {
  data: TypePost
}

export const Post: FC<Type> = ({ data }) => {
  return (
    <div className={styles.root}>
      <div className={styles.userCard}>
        <Image
          alt='User avatar'
          src={data.user.imageUrl}
          width={50}
          height={10}
        />
        <h4>
          {data.user.firstName} {data.user.lastName}
          <span>{dateFormat(data.createdAt)}</span>
        </h4>
      </div>
      <Link href={`${routesConfig.postsLink}/${data.id}`}>{data.content}</Link>
      <Link href={`${routesConfig.postsLink}/${data.id}`}>
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
          <p>
            <button>
              <Heart fill='#fff' />
            </button>
            {data.likes?.length} Likes
          </p>
        </div>
        <div>
          <p>
            <MessageCircle />
            {data.comments?.length} Comments
          </p>
        </div>
      </div>
      <Link
        href={`${routesConfig.postsLink}/${data.id}`}
        className={styles.link}
      >
        Comments...
      </Link>
    </div>
  )
}
