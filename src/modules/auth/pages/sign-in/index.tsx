import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { appActions, isLoading } from "@/app/app.slice"
import { authApi } from "@/modules/auth/api/auth.api"

export const SignIn = () => {
  const dispatch = useAppDispatch()
  const isLoading2 = useAppSelector(isLoading)

  const { register } = authApi()

  useEffect(() => {
    setTimeout(() => {
      dispatch(appActions.setIsLoading({ isLoading: false }))
    }, 3000)
    register({ email: "99popopo@mail.ru", password: "12345678" })
  }, [])

  return (
    <>
      <div className="App">{isLoading2 && <h1>Loader...</h1>}</div>
      <div>Hello</div>
    </>
  )
}
