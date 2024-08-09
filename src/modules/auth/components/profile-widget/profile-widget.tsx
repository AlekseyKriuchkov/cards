import React from "react"
import {
  StyledProfileWidgetAvatar,
  StyledUserName,
} from "@/modules/auth/pages/profile/style"
import { useAuth } from "@/modules/auth/hooks/useAuth"
import { WidgetButton } from "@/modules/auth/components/widget-button/widget-button"
import { ProfileLogOutButton } from "@/modules/auth/components/profile-logOut-button/profile-logOut-button"
import { useNavigate } from "react-router-dom"
import { UserOutlined } from "@ant-design/icons"
import { Skeleton } from "antd"

export const ProfileWidget = () => {
  const { user, isAuthorized, isLoading } = useAuth()
  const navigate = useNavigate()
  const goToProfile = () => {
    navigate("/profile")
  }

  if (isLoading) return <Skeleton.Input active />

  if (!isAuthorized) {
    return <WidgetButton />
  }

  return (
    <>
      <StyledUserName onClick={goToProfile}>{user?.name}</StyledUserName>
      {user?.avatar === " " || !user?.avatar ? (
        <UserOutlined />
      ) : (
        <StyledProfileWidgetAvatar src={user?.avatar} />
      )}
      <ProfileLogOutButton />
    </>
  )
}
