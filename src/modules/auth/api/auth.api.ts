import { authInstance } from "@/modules/auth/api/auth.instance"
import {
  AuthMeUpdate,
  LoginType,
  RegisterResponse,
  RegisterType,
} from "@/modules/auth/api/types"

export const authApi = {
  register: (params: RegisterType) => {
    return authInstance.post<RegisterResponse>("register", params)
  },
  login: (params: LoginType) => {
    return authInstance.post("login", params)
  },
  authMe: (params: any) => {
    return authInstance.post(params)
  },
  authMeUpdate: (params: AuthMeUpdate) => {
    return authInstance.put("me", params)
  },
}
