import { useAppSelector } from "@/app/hooks"

export const useAuth = () => {
  const user = useAppSelector((state) => state.auth.user)
  const isAuthorized = useAppSelector((state) => state.auth.user)

  return {
    user,
    isAuthorized,
  }
}
