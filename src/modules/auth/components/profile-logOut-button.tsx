import React from "react"
import { StyledProfileLogOutButton } from "@/modules/auth/pages/profile/style"
import { LogoutOutlined } from "@ant-design/icons"
import { authThunk } from "@/modules/auth/auth.slice"
import { useAppDispatch } from "@/app/hooks"

export const ProfileLogOutButton = () => {
  const dispatch = useAppDispatch()
  const logOut = async () => {
    dispatch(authThunk.logOut({}))
  }
  return (
    <StyledProfileLogOutButton onClick={logOut} icon={<LogoutOutlined />}>
      Log Out
    </StyledProfileLogOutButton>
  )
}
