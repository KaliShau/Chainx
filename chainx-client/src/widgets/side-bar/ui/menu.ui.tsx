'use client'

import { FC, useEffect, useState } from 'react'
import { MenuItem } from './menu-item.ui'
import { TypeMenuItem } from '../models/menu-item.type'
import styles from './side-bar.module.scss'
import { ChevronUp } from 'lucide-react'
import { cn } from '@/shared/utils/classnames.utils'

type menuData = {
  menuData: TypeMenuItem[]
  localStorageMenu: {
    add: (status: boolean) => void
    get: () => boolean
  }
  topic: string
}

export const Menu: FC<menuData> = ({ menuData, localStorageMenu, topic }) => {
  const [isVisibleMenu, setIsVisibleMenu] = useState(true)

  useEffect(() => {
    const savedStatus = localStorageMenu.get()
    setIsVisibleMenu(savedStatus)
  })

  const changeVisibleMenu = () => {
    const newVisibility = !isVisibleMenu
    setIsVisibleMenu(newVisibility)
    localStorageMenu.add(newVisibility)
  }

  return (
    <div className={styles.Menu}>
      <div className={styles.menuTitle}>
        <h5>{topic}</h5>
        <button onClick={changeVisibleMenu}>
          <ChevronUp
            className={cn(styles.chevron, {
              [styles.rotate]: !isVisibleMenu
            })}
          />
        </button>
      </div>
      <div
        className={cn(styles.menuContent, {
          [styles.collapsed]: !isVisibleMenu
        })}
      >
        {menuData.map(data => (
          <MenuItem key={data.link} {...data} />
        ))}
      </div>
    </div>
  )
}
