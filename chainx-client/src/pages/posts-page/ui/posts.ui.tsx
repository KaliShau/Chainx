'use client'

import { FC, useEffect } from 'react'
import styles from './posts.module.scss'
import { Post } from '@/entities/post'
import { usePosts } from '../hooks/posts.hook'
import { PostsService } from '../api/posts.service'
import { TypePost } from '@/shared/models/post.type'

export const Posts: FC = () => {
  // const { data, isError, isLoading, isFetchingNextPage } = usePosts()

  // if (isLoading) {
  //   return <div>Loading...</div>
  // }

  // if (isError) {
  //   return <div>Error...</div>
  // }

  // console.log(data?.pages)

  let data: TypePost[] = []
  useEffect(() => {
    data = PostsService.getAll(1)
    console.log(data)
  })

  return <div className={styles.root}></div>
}
