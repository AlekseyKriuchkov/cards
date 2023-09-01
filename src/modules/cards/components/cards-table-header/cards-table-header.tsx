import {
  StyledAddNewPackButton,
  StyledTableHeaderWrapper,
  StyledTableTitle,
} from "@/modules/cards/components/cards-table-header/styles"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import React from "react"
import { CardsModal } from "@/modules/cards/components/modal"
import { AddNewPackModal } from "@/modules/cards/components/add-new-pack-modal/add-new-pack-modal"
import { setModalType } from "@/modules/cards/cards.slice"

export const CardsTableHeader = () => {
  const isLoading = useAppSelector((state) => state.cards.isLoading)
  const modalType = useAppSelector((state) => state.cards.modalType)
  const dispatch = useAppDispatch()
  const addNewPack = () => {
    dispatch(
      setModalType({
        modalType: "addPack",
      }),
    )
  }

  if (modalType?.modalType === "addPack") {
    return (
      <div>
        <CardsModal showModal={true} title={"Add new pack"}>
          <AddNewPackModal />
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
