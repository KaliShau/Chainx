'use client'

import { FC } from 'react'
import { TypeMenuItem } from '../models/menuItem.type'
import Link from 'next/link'
import styles from './sideBar.module.scss'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/shared/hooks/auth.hooks'

export const MenuItem: FC<TypeMenuItem> = props => {
  const pathname = usePathname()

  const { isAuth } = useAuth()

  if (props.isAuth !== undefined) {
    if (!isAuth === props.isAuth) {
      return null
    }

    if (isAuth && !props.isAuth) {
      return null
    }
  }

  return (
    <Link
      className={clsx(styles.menuItem, {
        [styles.active]: pathname?.startsWith(props.link),
      })}
      href={props.link}
    >
      <props.icon />
      <h6>{props.title}</h6>
    </Link>
  )
}
