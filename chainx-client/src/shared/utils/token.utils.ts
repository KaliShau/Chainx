import Cookies from 'js-cookie'

export enum EnumTokens {
  'ACCESS_TOKEN' = 'accessToken',
  'REFRESH_TOKEN' = 'refreshToken'
}

export const cookiesTokens = {
  getAccessToken: () => {
    const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
    return accessToken || null
  },

  saveAccessToken: (accessToken: string) => {
    Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
      domain: process.env.APP_DOMAIN,
      sameSite: 'strict',
      expires: 1
    })
  },

  removeAccessToken: () => {
    Cookies.remove(EnumTokens.ACCESS_TOKEN)
  }
}
