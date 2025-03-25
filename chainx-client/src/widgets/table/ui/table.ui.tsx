import { FC } from 'react'
import { TypeTable } from '../models/table.type'
import Link from 'next/link'
import { Button } from '@/shared/ui/button/button.ui'
import styles from './table.module.scss'
import { useDeleteMessage } from '@/features/messages/hooks/delete-message.hook'

export const Table: FC<TypeTable> = ({ head, rows }) => {
  const { mutate } = useDeleteMessage()

  return (
    <table className={styles.root}>
      <thead>
        <tr>
          {head.map((data, index) => (
            <th key={index}>{data.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.row.map((item, itemIndex) => (
              <td key={itemIndex}>
                {item.link ? (
                  <Link href={item.link}>{item.title}</Link>
                ) : (
                  <Button onClick={() => mutate(item.id)}>Delete</Button>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
