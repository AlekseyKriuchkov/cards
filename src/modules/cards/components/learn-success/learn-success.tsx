import React from "react"
import { StyledLearnSuccess } from "@/modules/cards/components/learn-success/styles"
import { Result } from "antd"
import { StyledLearnCardButton } from "@/modules/cards/components/learn-page/styles"
import { useNavigate } from "react-router-dom"

export const LearnSuccess = () => {
  const navigate = useNavigate()
  const handleFinishLearn = () => {
    navigate("/packs")
  }

  return (
    <StyledLearnSuccess>
      <Result
        status="success"
        title="You have completed your learn."
        extra={[
          <StyledLearnCardButton onClick={handleFinishLearn}>
            Go to Packs
          </StyledLearnCardButton>,
        ]}
      />
    </StyledLearnSuccess>
  )
}
