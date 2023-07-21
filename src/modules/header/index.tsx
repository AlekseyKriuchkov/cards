import {
  StyledHeader,
  StyledLogo,
  StyledProfileWidgetWrapper,
} from "@/modules/header/styles"
import logo from "@/incubator-logo.png"

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <StyledLogo src={logo} />
        <StyledProfileWidgetWrapper></StyledProfileWidgetWrapper>
      </StyledHeader>
    </>
  )
}
