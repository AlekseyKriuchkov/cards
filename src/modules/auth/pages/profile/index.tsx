import React, { useEffect } from "react"
import { StyledCard } from "@/modules/auth/pages/sign-in/styles"
import { LogoutOutlined } from "@ant-design/icons"
import {
  StyledProfileContainer,
  StyledProfileLogOutButton,
  StyledProfileText,
  StyledUserName,
} from "@/modules/auth/pages/profile/style"
import { useAuth } from "@/modules/auth/hooks/useAuth"
import { useAppDispatch } from "@/app/hooks"
import { authThunk } from "@/modules/auth/auth.slice"
import { useNavigate } from "react-router-dom"

export const Profile = () => {
  const { isAuthorized } = useAuth()
  const { user } = useAuth()

  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const logOut = async () => {
    dispatch(authThunk.logOut({}))
  }

  useEffect(() => {
    if (!isAuthorized) navigate("/sign-in")
  }, [isAuthorized])

  return (
    <StyledCard title={"Personal information"}>
      <StyledProfileContainer>
        <StyledUserName>{user?.name}</StyledUserName>
        <StyledProfileText>{user?.email}</StyledProfileText>
        <StyledProfileLogOutButton onClick={logOut} icon={<LogoutOutlined />}>
          Log Out
        </StyledProfileLogOutButton>
      </StyledProfileContainer>
    </StyledCard>
  )
}
