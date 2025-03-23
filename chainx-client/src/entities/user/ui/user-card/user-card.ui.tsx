import { PUBLIC_ROUTES } from '@/shared/config/routes.config'
import styles from './user-card.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { dateFormat } from '@/shared/utils/date-format.utils'
import { TypeUser } from '@/shared/models/user.type'
import { FC } from 'react'
import { cn } from '@/shared/utils/classnames.utils'
import { UseFormSetValue } from 'react-hook-form'
import { TypeCreateMessageForm } from '@/features/messages/ui/create-message-from'

type Type = {
  data: TypeUser
  createDate?: string
  type?: 'link' | 'button'
  setValue?: UseFormSetValue<TypeCreateMessageForm>
}

export const UserCard: FC<Type> = ({
  data,
  createDate,
  type = 'link',
  setValue
}) => {
  if (type == 'link') {
    return (
      <div className={styles.userCard}>
        <Link href={PUBLIC_ROUTES.user(data.id)}>
          <Image alt='User avatar' src={data.imageUrl} width={50} height={50} />
          <h4>
            {data.firstName} {data.lastName}
            {createDate && <span>{dateFormat(createDate)}</span>}
          </h4>
        </Link>
      </div>
    )
  } else if (type == 'button') {
    return (
      <button
        type='button'
        onClick={() => setValue!('username', data.username)}
        className={cn(styles.userCard, styles.search)}
      >
        <Image alt='User avatar' src={data.imageUrl} width={50} height={50} />
        <h4>
          {data.firstName} {data.lastName}
          <span>{data.username}</span>
        </h4>
      </button>
    )
  }
}
