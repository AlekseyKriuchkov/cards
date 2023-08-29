import {
  StyledAddNewPackButton,
  StyledTableHeaderWrapper,
  StyledTableTitle,
} from "@/modules/cards/components/cards-table-header/styles"
import { useAppSelector } from "@/app/hooks"
import React, { useState } from "react"
import { CardsModal } from "@/modules/cards/components/modal"
import { AddNewPackModal } from "@/modules/cards/components/add-new-pack-modal/add-new-pack-modal"

export const CardsTableHeader = () => {
  const [showModal, setShowModal] = useState(false)
  const isLoading = useAppSelector((state) => state.cards.isLoading)
  const addNewPack = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }
  if (showModal) {
    return (
      <div>
        <CardsModal
          showModal={showModal}
          callback={closeModal}
          title={"Add new pack"}
        >
          <AddNewPackModal callback={closeModal} />
        </CardsModal>
        <StyledTableHeaderWrapper>
          <StyledTableTitle>Packs list</StyledTableTitle>
          <StyledAddNewPackButton disabled={isLoading} onClick={addNewPack}>
            Add New Pack
          </StyledAddNewPackButton>
        </StyledTableHeaderWrapper>
      </div>
    )
  }
  return (
    <div>
      <StyledTableHeaderWrapper>
        <StyledTableTitle>Packs list</StyledTableTitle>
        <StyledAddNewPackButton disabled={isLoading} onClick={addNewPack}>
          Add New Pack
        </StyledAddNewPackButton>
      </StyledTableHeaderWrapper>
    </div>
  )
}
