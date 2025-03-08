import { useQueryClient, useMutation } from '@tanstack/react-query'
import { SignInService } from '../service/sign-in.service'
import { TypeAuthRequest, TypeAuthResponse } from '@/shared/models/auth.type'
import toast from 'react-hot-toast'
import { redirect } from 'next/navigation'
import { PRIVATE_ROUTES } from '@/shared/config/routes.config'
import { errorCatch } from '@/shared/api/api.helper'
import { cookiesTokens } from '@/shared/utils/token.utils'

export const useSignIn = () => {
  const queryClient = useQueryClient()

  const { mutate, isPending, isSuccess } = useMutation<
    TypeAuthResponse,
    Error,
    TypeAuthRequest
  >({
    mutationKey: ['user'],
    mutationFn: data => SignInService.signIn(data),
    onError: error => {
      toast.error(errorCatch(error))
    },
    onSuccess: data => {
      cookiesTokens.saveAccessToken(data.accessToken)
      toast.success('Sign in successfully!!!')
      queryClient.setQueryData(['user'], data)
    }
  })

  if (isSuccess) {
    redirect(PRIVATE_ROUTES.dashboard())
  }

  return { mutate, isPending }
}
