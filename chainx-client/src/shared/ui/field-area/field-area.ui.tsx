import { TypeFieldArea } from './field-area.type'
import styles from './field-area.module.scss'
import { cn } from '@/shared/utils/classnames.utils'

export const FieldArea = ({
  topic,
  className: style,
  error,

  ...rest
}: TypeFieldArea) => {
  return (
    <div className={cn(styles.root, style, { [styles.error]: Boolean(error) })}>
      <p>{topic}</p>
      <textarea {...rest} />
    </div>
  )
}
