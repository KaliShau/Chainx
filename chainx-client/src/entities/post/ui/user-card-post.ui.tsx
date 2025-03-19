import { PUBLIC_ROUTES } from '@/shared/config/routes.config'
import styles from './post.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { dateFormat } from '@/shared/utils/dateFormat.utils'
import { TypePost } from '@/shared/models/post.type'

export const UserCardPost = ({ data }: { data: TypePost }) => {
  return (
    <div className={styles.userCard}>
      <Link href={PUBLIC_ROUTES.user(data.userId)}>
        <Image
          alt='User avatar'
          src={data.user.imageUrl}
          width={50}
          height={50}
        />
        <h4>
          {data.user.firstName} {data.user.lastName}
          <span>{dateFormat(data.createdAt)}</span>
        </h4>
      </Link>
    </div>
  )
}
