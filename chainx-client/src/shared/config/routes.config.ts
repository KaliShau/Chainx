export const APP_URL = process.env.APP_URL

export const PUBLIC_ROUTES = {
  root: (url: string = '') => `${url ? url : ''}`,

  posts: () => PUBLIC_ROUTES.root('/posts'),
  post: (id: string = '') => PUBLIC_ROUTES.root(`/posts/${id}`),

  signIn: () => PUBLIC_ROUTES.root('/auth/sign-in'),
  signUp: () => PUBLIC_ROUTES.root('/auth/sign-up'),

  aboutUs: () => PUBLIC_ROUTES.root('/about-us'),

  user: (id: string = '') => PUBLIC_ROUTES.root(`/user/${id}`)
}

export const PRIVATE_ROUTES = {
  root: (url: string = '') => `${url ? url : ''}`,

  dashboard: () => PRIVATE_ROUTES.root('/dashboard'),
  updateUser: () => PRIVATE_ROUTES.root('/dashboard/update'),

  email: () => PRIVATE_ROUTES.root('/email'),

  signOut: () => PRIVATE_ROUTES.root('/auth/sign-out'),

  postsPanelMy: () => PRIVATE_ROUTES.root('/panel/posts'),
  postsPanelCreate: () => PRIVATE_ROUTES.root('/panel/posts/create')
}
