'use client'

import { PanelBar } from '@/widgets/panel-bar'
import { PropsWithChildren } from 'react'

import styles from './layout.module.scss'
import { PANEL_POSTS_DATA } from '@/widgets/panel-bar/data/panel-posts.data'

const PostsLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.root}>
      <PanelBar panelData={PANEL_POSTS_DATA} />
      {children}
    </div>
  )
}

export default PostsLayout
