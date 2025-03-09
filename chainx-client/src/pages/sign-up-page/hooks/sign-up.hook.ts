import { useMutation, useQueryClient } from '@tanstack/react-query'
import { SignUpService } from '../services/sign-up.service'
import { TypeAuthRequest } from '@/shared/models/auth.type'
import toast from 'react-hot-toast'
import { errorCatch } from '@/shared/api/api.helper'
import { cookiesTokens } from '@/shared/utils/token.utils'
import { redirect } from 'next/navigation'
import { PRIVATE_ROUTES } from '@/shared/config/routes.config'

export const useSignUp = () => {
  const queryClient = useQueryClient()

  const { mutate, isSuccess, isPending } = useMutation({
    mutationKey: ['user'],
    mutationFn: (data: TypeAuthRequest) => SignUpService.signUp(data),
    onError: error => {
      toast.error(errorCatch(error))
    },
    onSuccess: data => {
      cookiesTokens.saveAccessToken(data.accessToken),
        toast.success('Sign up successfully!!!'),
        queryClient.setQueryData(['user'], data)
    }
  })

  if (isSuccess) {
    redirect(PRIVATE_ROUTES.dashboard())
  }

  return { mutate, isPending }
}
