import { FC } from 'react'
import { TypeTable } from '../models/table.type'
import Link from 'next/link'
import { Button } from '@/shared/ui/button/button.ui'
import styles from './table.module.scss'

export const Table: FC<TypeTable> = ({ head, rows }) => {
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
                  <Button onClick={item.action}>{item.actionTitle}</Button>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
