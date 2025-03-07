export const localStorageMainMenu = {
  add: (status: boolean) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('mainMenuStatus', status.toString())
    }
  },

  get: (): boolean => {
    if (typeof window !== 'undefined') {
      const status = localStorage.getItem('mainMenuStatus')
      return status === 'true'
    }
    return true
  }
}

export const localStorageAuthMenu = {
  add: (status: boolean) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('authMenuStatus', status.toString())
    }
  },

  get: (): boolean => {
    if (typeof window !== 'undefined') {
      const status = localStorage.getItem('authMenuStatus')
      return status === 'true'
    }
    return true
  }
}

export const localStorageAddMenu = {
  add: (status: boolean) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('addMenuStatus', status.toString())
    }
  },

  get: (): boolean => {
    if (typeof window !== 'undefined') {
      const status = localStorage.getItem('addMenuStatus')
      return status === 'true'
    }
    return true
  }
}
