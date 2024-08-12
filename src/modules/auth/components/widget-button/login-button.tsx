import React from "react"
import { StyledLoginButton } from "@/modules/auth/pages/profile/style"
import { useLocation, useNavigate } from "react-router-dom"

export const LoginButton = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleSignInRedirect = () => {
    navigate("/sign-in")
  }

  const handleSignUpRedirect = () => {
    navigate("/sign-up")
  }

  const currentPath = location.pathname

  return (
    <StyledLoginButton
      type={"primary"}
      onClick={() => {
        currentPath === "/sign-up"
          ? handleSignInRedirect()
          : handleSignUpRedirect()
      }}
    >
      {currentPath === "/sign-up" ? "Sign in" : "Sign up"}
    </StyledLoginButton>
  )
}
