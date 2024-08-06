import React, { useState } from "react"
import { StyledLearnAnswer } from "@/modules/cards/components/learn-answer/styles"
import { StyledLearnCardButton } from "@/modules/cards/components/learn-page/styles"
import { Text } from "@/modules/auth/pages/profile/style"
import { Rate } from "antd"
import { CardType } from "@/modules/cards/types"
import { useAppDispatch } from "@/app/hooks"
import { cardsThunk } from "@/modules/cards/cards.slice"

type Props = {
  setIsShowAnswer: (value: boolean) => void
  setCurrentQuestionIndex: (index: number) => void
  currentQuestionIndex: number
  sortedCards: CardType[]
}

export const LearnAnswer: React.FC<Props> = ({
  setIsShowAnswer,
  sortedCards,
  currentQuestionIndex,
  setCurrentQuestionIndex,
}) => {
  const dispatch = useAppDispatch()

  const [rating, setRating] = useState(0)

  const handleNextQuestion = () => {
    dispatch(
      cardsThunk.updateGrade({
        grade: rating,
        card_id: sortedCards[currentQuestionIndex]._id,
      }),
    )
    console.log(rating)
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
            setRating(value)
          }}
        />
        <StyledLearnCardButton onClick={handleNextQuestion}>
          Next Question
        </StyledLearnCardButton>
      </StyledLearnAnswer>
    </>
  )
}
