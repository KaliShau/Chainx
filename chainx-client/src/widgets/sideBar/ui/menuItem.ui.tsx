'use client'

import { FC } from 'react'
import { TypeMenuItem } from '../models/menuItem.type'
import Link from 'next/link'
import styles from './sideBar.module.scss'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/features/tokens'
import { Loader } from '@/shared/ui/loader/loader.ui'

export const MenuItem: FC<TypeMenuItem> = props => {
  const pathname = usePathname()

  const { isAuth, isLoading } = useAuth()

  if (props.isAuth !== undefined) {
    if (!isAuth === props.isAuth) {
      return null
    }

    if (isAuth && !props.isAuth) {
      return null
    }
  }

  if (isLoading) {
    return <div className={styles.skeleton} />
  }

  return (
    <Link
      className={clsx(styles.menuItem, {
        [styles.active]: pathname?.startsWith(props.link)
      })}
      href={props.link}
    >
      <props.icon />
      <h6>{props.title}</h6>
    </Link>
  )
}
