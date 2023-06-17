export type RegisterResponse = {
  addedUser: User
}
export type User = {
  email: string
  rememberMe: boolean
  isAdmin: boolean
  name: string
  verified: boolean
  publicCardPacksCount: number
  _id: string
  created: string
  updated: string
  __v: number
}

export type LoginResponse = {
  _id: string
  email: string
  rememberMe: boolean
  isAdmin: boolean
  name: string
  verified: boolean
  publicCardPacksCount: number
  created: string
  updated: string
  __v: number
  token: string
  tokenDeathTime: number
}

export type RegisterType = {
  email: string
  password: string
}
export type LoginType = {
  email: string
  password: string
  rememberMe: boolean
}
export type AuthMeUpdate = {
  name?: string
  avatar?: string // url or base64
}
