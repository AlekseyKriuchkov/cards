import styled from "styled-components"
import { Button } from "antd"

export const StyledLearnQuestionWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const StyledLearnQuestion = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 26rem;
  margin: 0 auto;
  padding: 1.5rem;
  gap: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
export const StyledLearnCardButton = styled(Button).attrs({
  type: "primary",
  htmlType: "submit",
  size: "large",
})`
  font-weight: 500;
  margin-left: 10px;
  width: 18rem;
  align-self: center;
`
