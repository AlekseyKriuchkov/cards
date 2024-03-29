import styled from "styled-components"
import { Typography } from "antd"
import { NavLink } from "react-router-dom"

const { Text } = Typography
// export const StyledNavLink = styled(NavLink)`
//   display: block;
//   text-align: center;
//   font-size: 1rem;
//   font-weight: 600;
//   margin-bottom: 1rem;
//   line-height: 24px;
// `

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 10% 0 10%;
  position: relative;
`
export const StyledP = styled.p`
  display: block;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.7rem;
  line-height: 24px;
`
export const StyledText = styled(Text)`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
  line-height: 24px;
  color: #9d9d9d;
`
