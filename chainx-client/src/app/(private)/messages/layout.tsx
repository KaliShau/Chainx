'use client'

import { PanelBar } from '@/widgets/panel-bar'
import { PropsWithChildren } from 'react'

import styles from './layout.module.scss'
import { MESSAGES_BAR_DATA } from '@/widgets/panel-bar/data/messages-bar.data'

const MessagesLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.root}>
      <PanelBar panelData={MESSAGES_BAR_DATA} />
      {children}
    </div>
  )
}

export default MessagesLayout
