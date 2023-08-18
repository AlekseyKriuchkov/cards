import React from "react"
import {
  StyledProfileWidgetAvatar,
  StyledUserName,
} from "@/modules/auth/pages/profile/style"
import { useAuth } from "@/modules/auth/hooks/useAuth"
import { WidgetButton } from "@/modules/auth/components/widget-button/widget-button"
import { ProfileLogOutButton } from "@/modules/auth/components/profile-logOut-button/profile-logOut-button"
import { useNavigate } from "react-router-dom"

export const ProfileWidget = () => {
  const { user, isAuthorized } = useAuth()
  const navigate = useNavigate()
  const goToProfile = () => {
    navigate("/profile")
  }
  if (!isAuthorized) {
    return <WidgetButton />
  }
  return (
    <>
      <StyledUserName onClick={goToProfile}>{user?.name}</StyledUserName>
      <StyledProfileWidgetAvatar src={user?.avatar} />
      <ProfileLogOutButton />
    </>
  )
}
