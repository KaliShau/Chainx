export const SERVER_URL = process.env.SERVER_URL as string

export const API_URL = {
  root: (url = '') => `${url ? url : ''}`,

  posts: (query: number | unknown = 1) => API_URL.root(`/posts?page=${query}`),

  getNewTokens: () => API_URL.root('/auth/get-new-tokens')
}
