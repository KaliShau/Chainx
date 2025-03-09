'use client'

import { useAuth } from '@/features/tokens'
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '@/shared/config/routes.config'
import { TypeAuthRequest } from '@/shared/models/auth.type'
import { redirect } from 'next/navigation'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './sign-up.module.scss'
import { Field } from '@/shared/ui/field/field.ui'
import { Button } from '@/shared/ui/button/button.ui'
import Link from 'next/link'
import { useSignUp } from '../hooks/sign-up.hook'
import { Spinner } from '@/shared/ui/spinner/spinner.ui'

export const SignUp: FC = () => {
  const { isAuth } = useAuth()
  if (isAuth) {
    redirect(PRIVATE_ROUTES.dashboard())
  }

  const { isPending, mutate } = useSignUp()

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
        <h2>Sign Up</h2>
        <p>Don't have an account yet? So create it!</p>
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
        <Button disabled={isPending}>
          {isPending ? <Spinner /> : 'Sign up'}
        </Button>
        <p>
          Do you have an account?{' '}
          <Link className={styles.signUp} href={PUBLIC_ROUTES.signIn()}>
            Sign in
          </Link>
        </p>
      </div>
    </form>
  )
}
