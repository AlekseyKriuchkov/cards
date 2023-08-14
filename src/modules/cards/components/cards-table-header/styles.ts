import Title from "antd/es/typography/Title"
import styled from "styled-components"
import { Button } from "antd"

export const StyledTableHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const StyledTableTitle = styled(Title).attrs({
  level: 2,
})`
  text-align: center;
  margin: 0;
  width: fit-content;
`
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
