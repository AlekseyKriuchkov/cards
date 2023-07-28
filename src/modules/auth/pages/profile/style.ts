import { Button, Typography } from "antd"
import styled from "styled-components"

export const { Text } = Typography

type UserNameProps = {
  fontSize?: "big" | "normal"
  wordBreak?: "break-all"
  border?: "none"
}

export const StyledProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const StyledAuthWidgetButton = styled(Button)`
  width: 100px;
  height: 35px;
`

export const StyledProfileText = styled(Text)`
  margin-top: 0.9rem;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.7rem;
  color: #c2c2c2;
`

export const StyledProfileLogOutButton = styled(Button)`
  margin-top: 1.8rem;
  margin-bottom: 1.7rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
export const StyledUserName = styled.span<UserNameProps>`
  font-size: ${(props) => (props.fontSize === "big" ? 16 : 12)}px;
  border-bottom: ${(props) =>
    props.border === "none" ? "none" : "1px dashed #1677ff"};
  margin-right: 7px;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  text-align: center;
  word-break: ${(props) => props.wordBreak};
`
