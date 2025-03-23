import { FC, PropsWithChildren } from 'react'
import styles from './layout.module.scss'
import { TypeLayout } from './layout.type'
import { cn } from '@/shared/utils/classnames.utils'

export const Layout: FC<TypeLayout> = ({ children, className, ...rest }) => {
  return (
    <div className={cn(styles.root, className)} {...rest}>
      {children}
    </div>
  )
}
