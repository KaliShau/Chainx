import { FC } from 'react'
import { TypeButton } from './button.type'
import styles from './button.module.scss'
import { cn } from '@/shared/utils/classnames.utils'

export const Button: FC<TypeButton> = ({
  children,
  className: style,
  ...rest
}) => {
  return (
    <button className={cn(styles.root, style)} {...rest}>
      {children}
    </button>
  )
}
