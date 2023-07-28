import React, { useEffect } from "react"
import { StyledCard } from "@/modules/auth/pages/sign-in/styles"
import {
  StyledProfileContainer,
  StyledProfileText,
  StyledUserName,
} from "@/modules/auth/pages/profile/style"
import { useAuth } from "@/modules/auth/hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { ProfileLogOutButton } from "@/modules/auth/components/profile-logOut-button"

export const Profile = () => {
  const { isAuthorized } = useAuth()
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthorized) navigate("/sign-in")
  }, [isAuthorized])

  return (
    <StyledCard title={"Personal information"}>
      <StyledProfileContainer>
        <StyledUserName>{user?.name}</StyledUserName>
        <StyledProfileText>{user?.email}</StyledProfileText>
        <ProfileLogOutButton />
      </StyledProfileContainer>
    </StyledCard>
  )
}
