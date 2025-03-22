'use client'

import { FC } from 'react'
import styles from './side-bar.module.scss'
import { Framer } from 'lucide-react'
import {
  ADDITIONAL_MENU,
  AUTH_MENU,
  MAIN_MENU,
  PANELS_MENU
} from '../data/menu.data'
import { Menu } from './menu.ui'
import {
  localStorageAddMenu,
  localStorageAuthMenu,
  localStorageMainMenu,
  localStoragePanelsMenu
} from '@/shared/utils/local-storage.utils'
import { useUser } from '@/features/tokens'

export const SideBar: FC = () => {
  const { user } = useUser()

  return (
    <aside className={styles.main}>
      <h1>
        <Framer size='40' />
        Chainx
      </h1>
      <Menu
        localStorageMenu={localStorageMainMenu}
        menuData={MAIN_MENU}
        topic='Main'
      />
      <Menu
        localStorageMenu={localStorageAuthMenu}
        menuData={AUTH_MENU}
        topic='Auth'
      />
      {user && (
        <Menu
          localStorageMenu={localStoragePanelsMenu}
          menuData={PANELS_MENU}
          topic='Panels'
        />
      )}
      <Menu
        localStorageMenu={localStorageAddMenu}
        menuData={ADDITIONAL_MENU}
        topic='Additional'
      />
    </aside>
  )
}
