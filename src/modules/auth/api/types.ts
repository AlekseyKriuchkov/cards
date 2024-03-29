export type ErrorType = {
  emailRegExp: {}
  error: string
  in: string
  isEmailValid: boolean
  isPassValid: boolean
  passwordRegExp: string
}
export type User = {
  _id: string
  email: string
  rememberMe: boolean
  isAdmin: boolean
  name: string
  avatar?: string
  verified: boolean
  publicCardPacksCount: number
  created: string
  updated: string
  token: string
  tokenDeathTime: number
  __v: number
}
export type RegisterResponse = {
  addedUser: {
    created: string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    updated: string
    verified: boolean
    __v: number
    _id: string
  }
}
export type MeResponse = User & AuthMeUpdate
export type AuthMeUpdate = {
  name?: string
  avatar?: string // url or base64
}
export type AuthMeUpdateResponse = {
  updatedUser: {
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
    avatar: string
  }
  token: string
  tokenDeathTime: number
}
export type LoginType = {
  email: string
  password: string
  rememberMe: boolean
}
export type RegisterType = Omit<LoginType, "rememberMe">
export type ForgotPasswordType = {
  email: string
  from?: string
  message: string
}
export type NewPasswordType = {
  password: string
  resetPasswordToken: string | undefined
}
