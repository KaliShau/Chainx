export const APP_URL = process.env.APP_URL

export const PUBLIC_ROUTES = {
  root: (url: string = '') => `${url ? url : ''}`,

  posts: () => PUBLIC_ROUTES.root('/posts'),
  post: (id: string) => PUBLIC_ROUTES.root(`/posts/${id}`),

  signIn: () => PUBLIC_ROUTES.root('/auth/sign-in'),
  signUp: () => PUBLIC_ROUTES.root('/auth/sign-up'),
}

export const PRIVATE_ROUTES = {
  root: (url: string = '') => `${url ? url : ''}`,

  dashboard: () => PUBLIC_ROUTES.root('/dashboard'),
  email: () => PUBLIC_ROUTES.root('/email'),
  signOut: () => PUBLIC_ROUTES.root('/auth/sign-out'),
}
