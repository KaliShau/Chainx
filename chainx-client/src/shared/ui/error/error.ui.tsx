import { CloudAlert } from 'lucide-react'
import styles from './error.module.scss'
import { Button } from '../button/button.ui'
import { InfiniteData, QueryObserverResult } from '@tanstack/react-query'
import { TypePost } from '@/shared/models/post.type'
import { FC } from 'react'

interface ErrorProps {
  refetch: () => void
}

export const Error: FC<ErrorProps> = ({ refetch }) => {
  const handleReload = () => {
    console.log('refetch')
    refetch()
  }
  return (
    <div className={styles.container}>
      <div>
        <h2>
          <CloudAlert size={32} /> Oops, something went wrong!
        </h2>
        <p>
          We couldn’t load the posts. Please check your internet connection and
          try again.
        </p>
        <Button onClick={handleReload}>Refresh page</Button>
      </div>
    </div>
  )
}
