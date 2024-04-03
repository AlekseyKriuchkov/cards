import React, { useEffect } from "react"
import { StyledCard } from "@/modules/auth/pages/sign-in/styles"
import {
  StyledProfileContainer,
  StyledProfileText,
} from "@/modules/auth/pages/profile/style"
import { useAuth } from "@/modules/auth/hooks/useAuth"
import { ProfileLogOutButton } from "@/modules/auth/components/profile-logOut-button/profile-logOut-button"
import { ProfileAvatar } from "@/modules/auth/components/profile-avatar/profile-avatar"
import { ProfileUserName } from "@/modules/auth/components/profile-user-name/profile-user-name"
import { GoToButton } from "@/shared/go-to-button/go-to-button"
import { useNavigate } from "react-router-dom"

export const Profile = () => {
  const { user, isLoading, isAuthorized } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthorized) {
      navigate("/sign-in")
    }
  }, [isAuthorized])

  return (
    <>
      <GoToButton text={"Go to Packs List"} />
      <StyledCard title={"Personal information"}>
        <StyledProfileContainer>
          <ProfileAvatar />
          <ProfileUserName />
          <StyledProfileText disabled={isLoading}>
            {user?.email}
          </StyledProfileText>
          <ProfileLogOutButton />
        </StyledProfileContainer>
      </StyledCard>
    </>
  )
}
