import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { authActions, isLoading } from "@/modules/auth/auth.slice"
import { instance } from "@/modules/auth/api/instance"

export const SignIn = () => {
  const dispatch = useAppDispatch()
  const isLoading2 = useAppSelector(isLoading)

  useEffect(() => {
    setTimeout(() => {
      dispatch(authActions.setIsLoading({ isLoading: false }))
    }, 3000)
    instance.get("ping")
  }, [])

  return (
    <>
      <div className="App">{isLoading2 && <h1>Loader...</h1>}</div>
      <div>Hello</div>
    </>
  )
}
