import {
  StyledHeader,
  StyledLogo,
  StyledProfileWidgetWrapper,
} from "@/modules/header/styles"
import logo from "@/assets/incubator-logo.png"
import React from "react"
import { ProfileWidget } from "@/modules/auth/components/profile-widget/profile-widget"

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyledLogo src={logo} />
        <StyledProfileWidgetWrapper>
          <ProfileWidget />
        </StyledProfileWidgetWrapper>
      </StyledHeader>
    </>
  )
}
