import React, { useState } from "react"
import { LearnAnswer } from "@/modules/cards/components/learn-answer/learn-answer"
import { LearnSuccess } from "@/modules/cards/components/learn-success/learn-success"
import { LearnCards } from "@/modules/cards/components/learn-page/learn-page"
import {
  StyledLearnCardButton,
  StyledLearnQuestion,
  StyledLearnQuestionWrapper,
} from "@/modules/cards/components/learn-page/styles"
import { Typography } from "antd"

const { Text } = Typography

type PropsType = {
  sortedCards: LearnCards[]
}

export const LearnCard: React.FC<PropsType> = ({ sortedCards }) => {
  const [isShowAnswer, setIsShowAnswer] = useState(false)

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const handleShowAnswer = () => {
    setIsShowAnswer(true)
  }

  if (currentQuestionIndex >= sortedCards.length || currentQuestionIndex >= 10)
    return <LearnSuccess />

  return (
    <>
      {!isShowAnswer ? (
        <>
          <StyledLearnQuestionWrapper>
            <StyledLearnQuestion>
              <div>
                <Text strong>Question: </Text>
                <Text>{sortedCards[currentQuestionIndex].question}</Text>
              </div>
              <StyledLearnCardButton onClick={handleShowAnswer}>
                Show answer
              </StyledLearnCardButton>
            </StyledLearnQuestion>
          </StyledLearnQuestionWrapper>
        </>
      ) : (
        <LearnAnswer
          sortedCards={sortedCards}
          setIsShowAnswer={setIsShowAnswer}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
        />
      )}
    </>
  )
}
