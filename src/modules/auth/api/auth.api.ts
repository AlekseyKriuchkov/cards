import { authInstance } from "@/modules/auth/api/auth.instance"
import {
  AuthMeUpdate,
  AuthMeUpdateResponse,
  ForgotPasswordType,
  LoginType,
  MeResponse,
  NewPasswordType,
  RegisterResponse,
  RegisterType,
  User,
} from "@/modules/auth/api/types"

export const authApi = {
  register: (params: RegisterType) => {
    return authInstance.post<RegisterResponse>("register", params)
  },
  login: (params: LoginType) => {
    return authInstance.post<User>("login", params)
  },
  authMeLogOut: (params: {}) => {
    return authInstance.delete("me", params)
  },
  authMe: () => {
    return authInstance.post<MeResponse>("me")
  },
  authMeUpdate: (params: AuthMeUpdate) => {
    return authInstance.put<AuthMeUpdateResponse>("me", params)
  },
  forgot: (params: ForgotPasswordType) => {
    return authInstance.post("forgot", params)
  },
  setNewPassword: (params: NewPasswordType) => {
    return authInstance.post("set-new-password", params)
  },
}
