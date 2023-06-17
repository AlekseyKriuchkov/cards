import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { appActions, isLoading } from "@/app/app.slice"
import { authThunk } from "@/modules/auth/auth.slice"

export const SignIn = () => {
  const dispatch = useAppDispatch()
  const isLoading2 = useAppSelector(isLoading)

  useEffect(() => {
    setTimeout(() => {
      dispatch(appActions.setIsLoading({ isLoading: false }))
    }, 3000)
    dispatch(
      authThunk.login({
        email: "99pozit32iv11@mail.ru",
        password: "qwer1thyui",
        rememberMe: true,
      }),
    )
  }, [])

  return (
    <>
      <div className="App">{isLoading2 && <h1>Loader...</h1>}</div>
      <div>Hello</div>
    </>
  )
}
