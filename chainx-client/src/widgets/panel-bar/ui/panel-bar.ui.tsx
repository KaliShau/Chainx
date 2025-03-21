import { FC } from 'react'
import { TypePanelBar } from '../models/panel.bar.model'
import styles from './panel-bar.module.scss'
import { PanelItem } from './panel-item.ui'

type Type = {
  panelData: TypePanelBar[]
}

export const PanelBar: FC<Type> = props => {
  return (
    <div className={styles.root}>
      {props.panelData.map(data => (
        <PanelItem data={data} key={data.link} />
      ))}
    </div>
  )
}
