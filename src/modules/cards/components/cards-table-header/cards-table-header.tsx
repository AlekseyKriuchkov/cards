import React from "react"
import {
  StyledAddNewPackButton,
  StyledTableHeaderWrapper,
  StyledTableTitle,
} from "@/modules/cards/components/cards-table-header/styles"
import { useAppSelector } from "@/app/hooks"

export const CardsTableHeader = () => {
  const isLoading = useAppSelector((state) => state.cards.isLoading)
  const AddNewPack = () => {
    console.log(123)
  }
  return (
    <div>
      <StyledTableHeaderWrapper>
        <StyledTableTitle>Packs list</StyledTableTitle>
        <StyledAddNewPackButton disabled={isLoading} onClick={AddNewPack}>
          Add New Pack
        </StyledAddNewPackButton>
      </StyledTableHeaderWrapper>
    </div>
  )
}
