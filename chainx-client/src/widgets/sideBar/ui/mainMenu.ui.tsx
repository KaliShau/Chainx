'use client'

import { FC, useEffect, useState } from 'react'
import { MenuItem } from './menuItem.ui'
import { TypeMenuItem } from '../models/menuItem.type'
import styles from './sideBar.module.scss'
import { ChevronUp } from 'lucide-react'
import clsx from 'clsx'
import { localStorageMainMenu } from '@/shared/utils/localStorage.utils'

type menuData = {
  menuData: TypeMenuItem[]
}

export const MainMenu: FC<menuData> = ({ menuData }) => {
  const [isVisibleMainMenu, setIsVisibleMainMenu] = useState(true)

  useEffect(() => {
    const savedStatus = localStorageMainMenu.get()
    setIsVisibleMainMenu(savedStatus)
  })

  const changeVisibleMainMenu = () => {
    const newVisibility = !isVisibleMainMenu
    setIsVisibleMainMenu(newVisibility)
    localStorageMainMenu.add(newVisibility)
  }

  return (
    <div className={styles.mainMenu}>
      <div className={styles.menuTitle}>
        <h5>Menu</h5>
        <button onClick={changeVisibleMainMenu}>
          <ChevronUp
            className={clsx(styles.chevron, {
              [styles.rotate]: !isVisibleMainMenu,
            })}
          />
        </button>
      </div>
      <div
        className={clsx(styles.menuContent, {
          [styles.collapsed]: !isVisibleMainMenu,
        })}
      >
        {menuData.map(data => (
          <MenuItem key={data.link} {...data} />
        ))}
      </div>
    </div>
  )
}
