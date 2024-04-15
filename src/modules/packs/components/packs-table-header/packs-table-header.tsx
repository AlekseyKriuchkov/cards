import { StyledAddNewPackButton } from "@/modules/packs/components/packs-table-header/styles"
import { useAppSelector } from "@/app/hooks"
import React from "react"
import { CardsModal } from "@/shared/modal"
import { AddPackDialog } from "@/modules/packs/components/add-new-pack-modal/add-pack-dialog"
import { StyledTableHeaderWrapper, StyledTableTitle } from "@/shared/styles"
import { PacksModalType } from "@/modules/packs/api/types"

export const PacksTableHeader = ({
  modalType,
  setModalType,
}: {
  modalType: PacksModalType
  setModalType: (modalData: PacksModalType) => void
}) => {
  const isLoading = useAppSelector((state) => state.packs.isLoading)
  const addNewPack = () => {
    setModalType({
      actionType: "addPack",
    })
  }
  return (
    <>
      {modalType?.actionType === "addPack" && (
        <CardsModal title={"Add new pack"} onClose={() => setModalType(null)}>
          <AddPackDialog
            onCancel={() => setModalType(null)}
            setModalType={setModalType}
          />
        </CardsModal>
      )}
      <StyledTableHeaderWrapper>
        <StyledTableTitle>Packs list</StyledTableTitle>
        <StyledAddNewPackButton disabled={isLoading} onClick={addNewPack}>
          Add New Pack
        </StyledAddNewPackButton>
      </StyledTableHeaderWrapper>
    </>
  )
}
