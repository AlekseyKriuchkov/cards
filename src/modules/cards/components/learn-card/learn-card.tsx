import React, { useState } from "react"
import { LearnSuccess } from "@/modules/cards/components/learn-success/learn-success"
import {
  StyledLearnCardButton,
  StyledLearnQuestion,
  StyledLearnQuestionWrapper,
} from "@/modules/cards/components/learn-page/styles"
import { Rate, Skeleton, Typography } from "antd"
import { CardType } from "@/modules/cards/types"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { cardsThunk } from "@/modules/cards/cards.slice"

const { Text } = Typography

type PropsType = {
  sortedCards: CardType[]
}

export const LearnCard: React.FC<PropsType> = ({ sortedCards }) => {
  const dispatch = useAppDispatch()

  const isLoading = useAppSelector((state) => state.cards.isLoading)

  const [isShowAnswer, setIsShowAnswer] = useState(false)

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const [questionGrade, setQuestionGrade] = useState(0)

  const handleNextQuestion = () => {
    dispatch(
      cardsThunk.updateGrade({
        grade: questionGrade || sortedCards[currentQuestionIndex].grade,
        card_id: sortedCards[currentQuestionIndex]._id,
      }),
    )
    setIsShowAnswer(false)
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const handleShowAnswer = () => {
    setIsShowAnswer(true)
  }

  if (currentQuestionIndex >= sortedCards.length || currentQuestionIndex >= 10)
    return <LearnSuccess />

  return (
    <>
      <StyledLearnQuestionWrapper>
        <StyledLearnQuestion>
          {isLoading ? (
            <Skeleton active title={false} />
          ) : (
            <>
              {!isShowAnswer ? (
                <>
                  <div>
                    <Text strong>Question: </Text>
                    <Text>{sortedCards[currentQuestionIndex].question}</Text>
                  </div>
                  <StyledLearnCardButton onClick={handleShowAnswer}>
                    Show answer
                  </StyledLearnCardButton>
                </>
              ) : (
                <>
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
                      setQuestionGrade(value)
                    }}
                  />
                  <StyledLearnCardButton onClick={handleNextQuestion}>
                    Next Question
                  </StyledLearnCardButton>
                </>
              )}
            </>
          )}
        </StyledLearnQuestion>
      </StyledLearnQuestionWrapper>
    </>
  )
}
