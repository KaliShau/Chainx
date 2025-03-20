import { PUBLIC_ROUTES } from '@/shared/config/routes.config'
import styles from './user-card.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { dateFormat } from '@/shared/utils/dateFormat.utils'
import { TypeUser } from '@/shared/models/user.type'

export const UserCard = ({
  data,
  createDate
}: {
  data: TypeUser
  createDate: string
}) => {
  return (
    <div className={styles.userCard}>
      <Link href={PUBLIC_ROUTES.user(data.id)}>
        <Image alt='User avatar' src={data.imageUrl} width={50} height={50} />
        <h4>
          {data.firstName} {data.lastName}
          <span>{dateFormat(createDate)}</span>
        </h4>
      </Link>
    </div>
  )
}
