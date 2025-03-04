import routesConfig from '@/shared/config/routes.config'
import { useAuth } from '@/shared/hooks/auth.hooks'
import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const isAuth = false

  const protectRoutes = [routesConfig.dashboardLink, routesConfig.emailLink]

  if (protectRoutes.includes(req.nextUrl.pathname) && !isAuth) {
    return NextResponse.rewrite(new URL('/404', req.url))
  }

  return NextResponse.next()
}
