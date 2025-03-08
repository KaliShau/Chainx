'use client'

import { FC } from 'react'
import styles from './sign-in.module.scss'
import { Field } from '@/shared/ui/field/field.ui'
import { SubmitHandler, useForm, UseFormHandleSubmit } from 'react-hook-form'
import { TypeAuthRequest } from '@/shared/models/auth.type'
import { Button } from '@/shared/ui/button/button.ui'
import Link from 'next/link'
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '@/shared/config/routes.config'
import { useSignIn } from '../hooks/sign-in.hook'
import { useAuth } from '@/features/tokens'
import { redirect } from 'next/navigation'

export const SignIn: FC = () => {
  const { mutate, isPending } = useSignIn()
  const { isAuth } = useAuth()
  if (isAuth) {
    redirect(PRIVATE_ROUTES.dashboard())
  }

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<TypeAuthRequest>({ mode: 'onChange' })

  const onSubmit: SubmitHandler<TypeAuthRequest> = data => {
    mutate(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.root}>
      <div>
        <h2>Sign In</h2>
        <p>Welcome back! Please sign in to your account!</p>
        <Field
          error={errors.username}
          topic='Username'
          {...register('username', { required: true })}
        />
        <Field
          error={errors.password}
          topic='Password'
          {...register('password', { required: true })}
        />
        <Button disabled={isPending}>Sign in</Button>
        <p>
          New user?{' '}
          <Link className={styles.signUp} href={PUBLIC_ROUTES.signUp()}>
            Sign up
          </Link>
        </p>
      </div>
    </form>
  )
}
