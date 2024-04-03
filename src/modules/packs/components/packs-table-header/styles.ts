import styled from "styled-components"
import { Button } from "antd"

export const StyledAddNewPackButton = styled(Button).attrs((props) => ({
  type: "primary",
  htmlType: "submit",
  size: "large",
  children: props.loading ? "Loading..." : props.children,
}))`
  font-weight: 500;
  margin-left: 10px;
  width: 200px;
`
