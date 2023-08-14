import React from "react"
import {
  StyledAddNewPackButton,
  StyledTableHeaderWrapper,
  StyledTableTitle,
} from "@/modules/cards/components/cards-table-header/styles"

export const CardsTableHeader = () => {
  const AddNewPack = () => {
    console.log(123)
  }
  return (
    <div>
      <StyledTableHeaderWrapper>
        <StyledTableTitle>Packs list</StyledTableTitle>
        <StyledAddNewPackButton onClick={AddNewPack}>
          Add New Pack
        </StyledAddNewPackButton>
      </StyledTableHeaderWrapper>
    </div>
  )
}
