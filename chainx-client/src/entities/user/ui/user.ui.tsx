import { TypeUser } from '@/shared/models/user.type'
import { FC } from 'react'
import styles from './user.module.scss'
import Image from 'next/image'
import { dateFormat } from '@/shared/utils/dateFormat.utils'

type Type = {
  data: TypeUser
}

export const User: FC<Type> = ({ data }) => {
  return (
    <div className={styles.root}>
      <Image height={1000} width={1000} src={data.imageUrl} alt='User avatar' />
      <div>
        <h2>Dashboard</h2>
        <h4>
          Username: <span>{data.username}</span>
        </h4>
        <h4>
          First name: <span>{data.firstName}</span>
        </h4>
        <h4>
          Last name: <span>{data.lastName}</span>
        </h4>
        <h4>
          Created at: <span>{dateFormat(data.createdAt)}</span>
        </h4>
        <h4>
          ID: <span>{data.id}</span>
        </h4>
      </div>
    </div>
  )
}
