import { useAuth } from '@/shared/hooks/auth.hooks'
import { NextRequest, NextResponse } from 'next/server'
import { PRIVATE_ROUTES } from './shared/config/routes.config'

export function middleware(req: NextRequest) {
  const isAuth = false

  const privateRoutesValues = Object.values(PRIVATE_ROUTES)

  const protectRoutes = privateRoutesValues
    .map(route => route())
    .filter(route => route !== '')

  if (protectRoutes.includes(req.nextUrl.pathname) && !isAuth) {
    return NextResponse.rewrite(new URL('/404', req.url))
  }

  return NextResponse.next()
}
