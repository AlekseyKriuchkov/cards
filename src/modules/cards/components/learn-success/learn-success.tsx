import React from "react"
import { StyledLearnSuccess } from "@/modules/cards/components/learn-success/styles"
import { Result, Skeleton } from "antd"
import { StyledLearnCardButton } from "@/modules/cards/components/learn-page/styles"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "@/app/hooks"

export const LearnSuccess = () => {
  const isLoading = useAppSelector((state) => state.cards.isLoading)
  const navigate = useNavigate()
  const handleFinishLearn = () => {
    navigate("/packs")
  }

  return (
    <StyledLearnSuccess>
      {isLoading ? (
        <Skeleton active title={false} paragraph={{ rows: 8 }} />
      ) : (
        <Result
          status="success"
          title="You have completed your learn."
          extra={[
            <StyledLearnCardButton onClick={handleFinishLearn}>
              Go to Packs
            </StyledLearnCardButton>,
          ]}
        />
      )}
    </StyledLearnSuccess>
  )
}
