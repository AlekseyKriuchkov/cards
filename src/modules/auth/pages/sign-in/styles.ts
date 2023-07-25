import { NavLink } from "react-router-dom"
import styled from "styled-components"
import { Card } from "antd"

export const StyledForgotPasswordLink = styled(NavLink)`
  display: block;
  text-align: center;
  color: black;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 1.2rem;

  &:hover {
    color: black;
    opacity: 0.7;
  }
`
export const StyledCard = styled(Card).attrs({
  headStyle: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: "1.5rem",
    marginBottom: "0.6rem",
  },
})`
  width: 100%;
  max-width: 26rem;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
