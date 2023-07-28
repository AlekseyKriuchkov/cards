import React from "react"
import { StyledUserName } from "@/modules/auth/pages/profile/style"
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
      <StyledUserName>{user?.name}</StyledUserName>
      <ProfileLogOutButton />
    </>
  )
}
