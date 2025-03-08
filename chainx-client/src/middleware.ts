import { NextRequest, NextResponse } from 'next/server'
import { PRIVATE_ROUTES } from './shared/config/routes.config'
import { EnumTokens } from './shared/utils/token.utils'

export function middleware(req: NextRequest) {
  const refreshToken = req.cookies.get(EnumTokens.REFRESH_TOKEN)?.value
  const isAuth = !!refreshToken

  const privateRoutesValues = Object.values(PRIVATE_ROUTES)
  const currentPath = req.nextUrl.pathname

  const protectRoutes = privateRoutesValues
    .map(route => route())
    .filter(route => route !== '')

  if (protectRoutes.includes(currentPath) && !isAuth) {
    return NextResponse.rewrite(new URL('/404', req.url))
  }

  return NextResponse.next()
}
