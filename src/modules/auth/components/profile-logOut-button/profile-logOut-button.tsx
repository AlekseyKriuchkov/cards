import React from "react"
import { StyledProfileLogOutButton } from "@/modules/auth/pages/profile/style"
import { LogoutOutlined } from "@ant-design/icons"
import { authThunk } from "@/modules/auth/auth.slice"
import { useAppDispatch } from "@/app/hooks"
import { useAuth } from "@/modules/auth/hooks/useAuth"
import { useNavigate } from "react-router-dom"

export const ProfileLogOutButton = () => {
  const { isLoading } = useAuth()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const logOut = async () => {
    dispatch(authThunk.logOut({}))
    navigate("/sign-in")
  }
  return (
    <StyledProfileLogOutButton
      disabled={isLoading}
      onClick={logOut}
      icon={<LogoutOutlined />}
    >
      Log Out
    </StyledProfileLogOutButton>
  )
}
