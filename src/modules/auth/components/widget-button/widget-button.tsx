import React from "react"
import { StyledAuthWidgetButton } from "@/modules/auth/pages/profile/style"
import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "@/modules/auth/hooks/useAuth"

export const WidgetButton = () => {
  const { isLoading } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const handleSignInRedirect = () => {
    navigate("/sign-in")
  }
  const handleSignUpRedirect = () => {
    navigate("/sign-up")
  }
  const widgetButtonProps =
    location.pathname === "/sign-up"
      ? { children: "Sign in", onClick: handleSignInRedirect }
      : { children: "Sign up", onClick: handleSignUpRedirect }
  return (
    <StyledAuthWidgetButton
      disabled={isLoading}
      type={"primary"}
      {...widgetButtonProps}
    />
  )
}
