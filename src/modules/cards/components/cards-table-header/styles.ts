import { Button } from "antd"
import styled from "styled-components"

export const StyledHeaderPackButtons = styled(Button).attrs((props) => ({
  type: "primary",
  htmlType: "submit",
  size: "large",
  children: props.loading ? "Loading..." : props.children,
}))`
  font-weight: 500;
  height: 40px;
`
