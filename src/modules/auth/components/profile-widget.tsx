import React from "react"
import {
  StyledProfileWidgetAvatar,
  StyledUserName,
} from "@/modules/auth/pages/profile/style"
import { useAuth } from "@/modules/auth/hooks/useAuth"
import { WidgetButton } from "@/modules/auth/components/widget-button"
import { ProfileLogOutButton } from "@/modules/auth/components/profile-logOut-button"

export const ProfileWidget = () => {
  const { isAuthorized } = useAuth()
  const { user } = useAuth()
  if (!isAuthorized) {
    return <WidgetButton />
  }
  return (
    <>
      <StyledUserName to={"/profile"}>{user?.name}</StyledUserName>
      <StyledProfileWidgetAvatar src={user?.avatar} />
      <ProfileLogOutButton />
    </>
  )
}
