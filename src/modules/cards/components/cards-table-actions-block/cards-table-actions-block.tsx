import React from "react"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import {
  CardsTableActionsBlockStyledSpan,
  CardsTableActionsBlockStyledWrapper,
} from "@/modules/cards/components/cards-table-actions-block/styles"
import { CardsModalType } from "@/modules/cards/types"

type PropsType = {
  setCardModalType: (modalData: CardsModalType) => void
  cardId: string
  question: string
  answer: string
}

export const CardsTableActionsBlock: React.FC<PropsType> = ({
  setCardModalType,
  cardId,
  question,
  answer,
}) => {
  const deleteHandler = () => {
    setCardModalType({
      actionType: "delete",
      cardId,
    })
  }
  const editHandler = () => {
    setCardModalType({
      actionType: "edit",
      cardId,
      question,
      answer,
    })
  }

  return (
    <CardsTableActionsBlockStyledWrapper>
      <CardsTableActionsBlockStyledSpan onClick={editHandler}>
        <EditOutlined />
      </CardsTableActionsBlockStyledSpan>
      <CardsTableActionsBlockStyledSpan onClick={deleteHandler}>
        <DeleteOutlined />
      </CardsTableActionsBlockStyledSpan>
    </CardsTableActionsBlockStyledWrapper>
  )
}
