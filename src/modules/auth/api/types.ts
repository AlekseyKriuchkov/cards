export type User = {
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
}
export type RegisterResponse = {
  addedUser: User
}
export type LoginResponse = User & {
  token: string
  tokenDeathTime: number
}
export type MeResponse = Omit<User, "__v"> & AuthMeUpdate
export type AuthMeUpdate = {
  name?: string
  avatar?: string // url or base64
}
export type LoginType = {
  email: string
  password: string
  rememberMe: boolean
}
export type RegisterType = Omit<LoginType, "rememberMe">
