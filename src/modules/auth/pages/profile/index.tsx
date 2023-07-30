import React, { useEffect } from "react"
import { StyledCard } from "@/modules/auth/pages/sign-in/styles"
import {
  StyledProfileContainer,
  StyledProfileText,
} from "@/modules/auth/pages/profile/style"
import { useAuth } from "@/modules/auth/hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { ProfileLogOutButton } from "@/modules/auth/components/profile-logOut-button"
import { ProfileAvatar } from "@/modules/auth/components/profile-avatar"
import { ProfileUserName } from "@/modules/auth/components/profile-user-name"

export const Profile = () => {
  const { isAuthorized } = useAuth()
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthorized) navigate("/sign-in")
  }, [isAuthorized])
  console.log(user)
  return (
    <StyledCard title={"Personal information"}>
      <StyledProfileContainer>
        <ProfileAvatar />
        <ProfileUserName />
        <StyledProfileText>{user?.email}</StyledProfileText>
        <ProfileLogOutButton />
      </StyledProfileContainer>
    </StyledCard>
  )
}
