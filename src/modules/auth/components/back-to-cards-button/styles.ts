import styled from "styled-components"
import { Button } from "antd"

export const StyledBackToCardLink = styled(Button)`
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
