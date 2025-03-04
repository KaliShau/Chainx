import { FC } from 'react'
import { TypeButton } from './button.type'
import styles from './button.module.scss'
import clsx from 'clsx'

export const Button: FC<TypeButton> = ({
  children,
  className: style,
  ...rest
}) => {
  return (
    <button className={clsx(styles.root, style)} {...rest}>
      {children}
    </button>
  )
}
