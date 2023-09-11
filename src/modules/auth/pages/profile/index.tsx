import React from "react"
import { StyledCard } from "@/modules/auth/pages/sign-in/styles"
import {
  StyledProfileContainer,
  StyledProfileText,
} from "@/modules/auth/pages/profile/style"
import { useAuth } from "@/modules/auth/hooks/useAuth"
import { ProfileLogOutButton } from "@/modules/auth/components/profile-logOut-button/profile-logOut-button"
import { ProfileAvatar } from "@/modules/auth/components/profile-avatar/profile-avatar"
import { ProfileUserName } from "@/modules/auth/components/profile-user-name/profile-user-name"
import { BackToCardsButton } from "@/modules/auth/components/back-to-cards-button/back-to-cards-button"

export const Profile = () => {
  const { user, isLoading } = useAuth()

  return (
    <>
      <BackToCardsButton />
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
