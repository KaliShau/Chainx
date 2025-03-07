'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient()

export const MainProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster position='top-right' />
        {children}
      </QueryClientProvider>
    </>
  )
}
