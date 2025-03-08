'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { SignOutService } from '../services/sign-out.service'
import { cookiesTokens } from '@/shared/utils/token.utils'
import { redirect } from 'next/navigation'
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '@/shared/config/routes.config'
import toast from 'react-hot-toast'
import { errorCatch } from '@/shared/api/api.helper'
import { useEffect } from 'react'

export const useSignOut = () => {
  const queryClient = useQueryClient()

  const { mutate, isSuccess } = useMutation<null, Error, null>({
    mutationKey: ['user'],
    mutationFn: () => SignOutService.signOut(),
    onError: error => {
      toast.error(errorCatch(error))
    },
    onSuccess: data => {
      cookiesTokens.removeAccessToken()
      toast.success('Sign out successfully!!!')
      queryClient.setQueryData(['user'], data)
    },
    retry: 0
  })

  if (isSuccess) {
    redirect(PUBLIC_ROUTES.signIn())
  }

  useEffect(() => {
    mutate(null)
  }, [])
}
