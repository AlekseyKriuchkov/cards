import { authInstance } from "@/modules/auth/api/auth.instance"
import {
  AuthMeUpdate,
  LoginType,
  MeResponse,
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
  authMe: () => {
    return authInstance.post<MeResponse>("me")
  },
  authMeUpdate: (params: AuthMeUpdate) => {
    return authInstance.put("me", params)
  },
}
