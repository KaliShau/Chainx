export const SERVER_URL = process.env.SERVER_URL as string

export const API_URL = {
  root: (url = '') => `${url ? url : ''}`,

  posts: (page: number | unknown = 1, limit: number) =>
    API_URL.root(`/posts?page=${page}&limit=${limit}`),
  post: (id = '') => API_URL.root(`/posts/${id}`),
  postsByUser: (page: number | unknown = 1, limit: number) =>
    API_URL.root(`/posts/user?page=${page}&limit=${limit}`),
  deletePost: (id = '') => API_URL.root(`/posts/${id}`),
  createPost: () => API_URL.root(`/posts`),

  getNewTokens: () => API_URL.root('/auth/get-new-tokens'),

  signIn: () => API_URL.root('/auth/sign-in'),
  signUp: () => API_URL.root('/auth/sign-up'),
  signOut: () => API_URL.root('/auth/sign-out'),

  userById: (id = '') => API_URL.root(`/users/${id}`),
  updateUser: () => API_URL.root('/users'),
  searchByUsername: (username: string = '') =>
    API_URL.root(`/users/search?username=${username}`),

  toggleLike: (id = '') => API_URL.root(`/likes/${id}`),

  uploadAvatar: () => API_URL.root('/files/avatars/upload'),
  uploadPostImage: () => API_URL.root('/files/posts/upload'),

  createComment: (id = '') => API_URL.root(`/comments/${id}`),
  deleteComment: (id = '') => API_URL.root(`/comments/${id}`),

  messagesMy: (page: number | unknown = 1, limit: number) =>
    API_URL.root(`/messages?page=${page}&limit=${limit}`),
  messagesSender: (page: number | unknown = 1, limit: number) =>
    API_URL.root(`/messages/sender?page=${page}&limit=${limit}`),
  messagesReceiver: (page: number | unknown = 1, limit: number) =>
    API_URL.root(`/messages/receiver?page=${page}&limit=${limit}`),
  messagesById: (id = '') => API_URL.root(`/messages/${id}`),
  messagesCreate: (id = '') => API_URL.root(`/messages/${id}`),
  messagesDelete: (id = '') => API_URL.root(`/messages/${id}`)
}
