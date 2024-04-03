import React from "react"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import {
  CardsTableActionsBlockStyledSpan,
  CardsTableActionsBlockStyledWrapper,
} from "@/modules/cards/components/cards-table-actions-block/styles"

export const CardsTableActionsBlock = () => {
  const deleteHandler = () => {}
  const editHandler = () => {}

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
