import { authInstance } from "@/modules/auth/api/auth.instance"

type RegisterType = {
  email: string
  password: string
}

export const authApi = () => {
  return {
    register: (params: RegisterType) => {
      return authInstance.post("register", params)
    },
    login: (params: any) => {
      return authInstance.post(params)
    },
    authMe: (params: any) => {
      return authInstance.post(params)
    },
    authMeUpdate: (params: any) => {
      return authInstance.put(params)
    },
  }
}
