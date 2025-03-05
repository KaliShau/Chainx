import { FC } from 'react'
import styles from './post.module.scss'
import { TypePost } from '@/shared/models/post.type'

type Type = {
  data: TypePost
}

export const Post: FC<Type> = ({ data }) => {
  return <div className={styles.root}>post</div>
}
