import { TypeAuthResponse } from '@/shared/models/auth.type'
import { useMutation, useQuery } from '@tanstack/react-query'
import { TokenService } from '../services/tokens.service'
import { cookiesTokens } from '@/shared/utils/token.utils'
import { useEffect } from 'react'

export const useUser = () => {
  const { data, isSuccess, isLoading } = useQuery<TypeAuthResponse>({
    queryKey: ['user'],
    queryFn: () => TokenService.getNewTokens(),
    retry: 0
  })

  if (isSuccess) {
    cookiesTokens.saveAccessToken(data.accessToken)
  }
  const user = data?.user

  return { user, isLoading }
}
