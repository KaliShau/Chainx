export const SERVER_URL = process.env.SERVER_URL as string

export const API_URL = {
  root: (url = '') => `${url ? url : ''}`,

  posts: (query: number | unknown = 1, limit: number) =>
    API_URL.root(`/posts?page=${query}&limit=${limit}`),
  post: (id = '') => API_URL.root(`/posts/${id}`),
  postsByUser: (query: number | unknown = 1, limit: number) =>
    API_URL.root(`/posts/user?page=${query}&limit=${limit}`),

  getNewTokens: () => API_URL.root('/auth/get-new-tokens'),

  signIn: () => API_URL.root('/auth/sign-in'),
  signUp: () => API_URL.root('/auth/sign-up'),
  signOut: () => API_URL.root('/auth/sign-out'),

  userById: (id = '') => API_URL.root(`/users/${id}`),
  updateUser: () => API_URL.root('/users'),

  toggleLike: (id = '') => API_URL.root(`/likes/${id}`),

  uploadAvatar: () => API_URL.root('/files/avatars/upload'),

  createComment: (id = '') => API_URL.root(`/comments/${id}`),
  deleteComment: (id = '') => API_URL.root(`/comments/${id}`)
}
