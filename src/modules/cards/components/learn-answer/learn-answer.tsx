import React from "react"
import { StyledLearnAnswer } from "@/modules/cards/components/learn-answer/styles"
import { StyledLearnCardButton } from "@/modules/cards/components/learn-page/styles"
import { Text } from "@/modules/auth/pages/profile/style"
import { Rate } from "antd"
import { LearnCards } from "@/modules/cards/components/learn-page/learn-page"

type Props = {
  setIsShowAnswer: (value: boolean) => void
  setCurrentQuestionIndex: (index: number) => void
  currentQuestionIndex: number
  sortedCards: LearnCards[]
}

export const LearnAnswer: React.FC<Props> = ({
  setIsShowAnswer,
  sortedCards,
  currentQuestionIndex,
  setCurrentQuestionIndex,
}) => {
  const handleNextQuestion = () => {
    setIsShowAnswer(false)
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  return (
    <>
      <StyledLearnAnswer>
        <div>
          <Text strong>Question: </Text>
          <Text>{sortedCards[currentQuestionIndex].question}</Text>
        </div>
        <div>
          <Text strong>Answer: </Text>
          <Text>{sortedCards[currentQuestionIndex].answer}</Text>
        </div>
        <Rate
          defaultValue={sortedCards[currentQuestionIndex].grade}
          onChange={(value) => {
            console.log(value)
          }}
        />
        <StyledLearnCardButton onClick={handleNextQuestion}>
          Next Question
        </StyledLearnCardButton>
      </StyledLearnAnswer>
    </>
  )
}
