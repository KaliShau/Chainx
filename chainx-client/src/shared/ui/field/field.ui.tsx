import { TypeField } from './field.type'
import styles from './field.module.scss'
import clsx from 'clsx'

export const Field = ({
  topic,
  className: style,
  error,
  ...rest
}: TypeField) => {
  return (
    <div className={clsx(styles.root, style, { [styles.error]: error })}>
      <p>{topic}</p>
      <input {...rest} />
    </div>
  )
}
