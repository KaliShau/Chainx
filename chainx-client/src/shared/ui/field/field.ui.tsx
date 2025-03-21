import { TypeField } from './field.type'
import styles from './field.module.scss'
import { cn } from '@/shared/utils/classnames.utils'

export const Field = ({
  topic,
  className: style,
  error,
  ...rest
}: TypeField) => {
  return (
    <div className={cn(styles.root, style, { [styles.error]: Boolean(error) })}>
      <p>{topic}</p>
      <input {...rest} />
    </div>
  )
}
