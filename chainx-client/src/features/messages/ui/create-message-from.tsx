'use client'

import { Button } from '@/shared/ui/button/button.ui'
import { FieldArea } from '@/shared/ui/field-area/field-area.ui'
import styles from './message.module.scss'
import { SubmitHandler, useForm } from 'react-hook-form'
import { TypeCreateMessage } from '@/shared/models/message.type'
import { Field } from '@/shared/ui/field/field.ui'
import { useCreateMessage } from '../hooks/create-message.hook'
import { UserCard } from '@/entities/user'
import { useEffect } from 'react'
import { useSearchUsers } from '@/features/users/hooks/search-users.hook'
import { useDebounced } from '@/shared/hooks/useDebounced'

export type TypeCreateMessageForm = TypeCreateMessage & { username: string }

export const CreateMessageForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue
  } = useForm<TypeCreateMessageForm>({ mode: 'onChange' })

  const { mutate } = useCreateMessage()
  const { data, mutateAsync } = useSearchUsers()

  const onSubmit: SubmitHandler<TypeCreateMessageForm> = data => {
    mutate({ data: { content: data.content }, id: data.username })
  }

  const username = watch('username')
  const debouncedUsername = useDebounced(username, 300)

  useEffect(() => {
    if (debouncedUsername) {
      mutateAsync(debouncedUsername)
    }
  }, [debouncedUsername])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.createMessage}>
      <div>
        <FieldArea
          error={errors.content}
          topic='Content'
          {...register('content', { required: true })}
        />
        <div className={styles.rel}>
          <Field
            error={errors.username}
            topic='Receiver username'
            {...register('username', { required: true })}
          />
          <div className={styles.abs}>
            {data &&
              username &&
              data?.map(data => (
                <UserCard
                  data={data}
                  key={data.id}
                  type={'button'}
                  setValue={setValue}
                />
              ))}
          </div>
        </div>
      </div>
      <Button>Create</Button>
    </form>
  )
}
