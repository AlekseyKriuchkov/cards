import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const StyledBackToCardLink = styled(NavLink)`
  position: absolute;
  top: 30px;
  text-decoration: none;
  color: black;
  line-height: 1.5rem;
  margin-bottom: 20px;

  &:hover {
    opacity: 0.7;
  }
`
