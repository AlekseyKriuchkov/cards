import { StyledAddNewPackButton } from "@/modules/packs/components/packs-table-header/styles"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import React from "react"
import { CardsModal } from "@/shared/modal"
import { AddNewPackModal } from "@/modules/packs/components/add-new-pack-modal/add-new-pack-modal"
import { setModalType } from "@/modules/packs/packs.slice"
import { StyledTableHeaderWrapper, StyledTableTitle } from "@/shared/styles"

export const PacksTableHeader = () => {
  const isLoading = useAppSelector((state) => state.packs.isLoading)
  const modalType = useAppSelector((state) => state.packs.modalType)
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
        <CardsModal title={"Add new pack"}>
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
