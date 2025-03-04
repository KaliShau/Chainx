class ROUTES {
  // Main menu

  dashboardLink = '/dashboard'
  dashboardName = 'Dashboard'

  emailLink = '/email'
  emailName = 'Email'

  postsLink = '/posts'
  postsName = 'Posts'

  // Auth menu
  private auth = '/auth'

  signInLink = `${this.auth}/sign-in`
  signInName = 'Sign-in'

  signUpLink = `${this.auth}/sign-up`
  signUpName = 'Sign-up'

  signOutLink = `${this.auth}/sign-out`
  signOutName = 'Sign-out'
}

export default new ROUTES()
