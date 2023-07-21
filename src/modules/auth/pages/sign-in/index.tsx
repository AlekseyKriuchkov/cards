import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { appActions, isLoading } from "@/app/app.slice"
import { authThunk } from "@/modules/auth/auth.slice"
import { StyledCard } from "@/modules/auth/pages/sign-in/styles"

export const SignIn = () => {
  return (
    <>
      <StyledCard title={"Sign In"} />
    </>
  )
}

// const dispatch = useAppDispatch()
// const isLoading2 = useAppSelector(isLoading)
//
// useEffect(() => {
//   setTimeout(() => {
//     dispatch(appActions.setIsLoading({ isLoading: false }))
//   }, 3000)
//   dispatch(authThunk.authMe())
// }, [])
