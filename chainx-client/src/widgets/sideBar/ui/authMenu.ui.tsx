'use client'

import { FC, useEffect, useState } from 'react'
import { MenuItem } from './menuItem.ui'
import { TypeMenuItem } from '../models/menuItem.type'
import styles from './sideBar.module.scss'
import { ChevronUp } from 'lucide-react'
import clsx from 'clsx'
import { localStorageAuthMenu } from '@/shared/utils/localStorage.utils'

type menuData = {
  menuData: TypeMenuItem[]
}

export const AuthMenu: FC<menuData> = ({ menuData }) => {
  const [isVisibleAuthMenu, setVisibleAuthMenu] = useState(true)

  useEffect(() => {
    const savedStatus = localStorageAuthMenu.get()
    setVisibleAuthMenu(savedStatus)
  })

  const changeVisibleMainMenu = () => {
    const newVisibility = !isVisibleAuthMenu
    setVisibleAuthMenu(newVisibility)
    localStorageAuthMenu.add(newVisibility)
  }

  return (
    <div className={styles.mainMenu}>
      <div className={styles.menuTitle}>
        <h5>Auth</h5>
        <button onClick={changeVisibleMainMenu}>
          <ChevronUp
            className={clsx(styles.chevron, {
              [styles.rotate]: !isVisibleAuthMenu,
            })}
          />
        </button>
      </div>
      <div
        className={clsx(styles.menuContent, {
          [styles.collapsed]: !isVisibleAuthMenu,
        })}
      >
        {menuData.map(data => (
          <MenuItem key={data.link} {...data} />
        ))}
      </div>
    </div>
  )
}
