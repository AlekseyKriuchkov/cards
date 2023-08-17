import { useAppSelector } from "@/app/hooks"

export const useAuth = () => {
  const user = useAppSelector((state) => state.auth.user)
  const isAuthorized = useAppSelector((state) => !!state.auth.user)
  const isLoading = useAppSelector((state) => state.auth.isLoading)

  return {
    user,
    isAuthorized,
    isLoading,
  }
}
