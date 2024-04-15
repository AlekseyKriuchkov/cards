import { StyledAddNewPackButton } from "@/modules/packs/components/packs-table-header/styles"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import React from "react"
import { CardsModal } from "@/shared/modal"
import { AddPackDialog } from "@/modules/packs/components/add-new-pack-modal/add-pack-dialog"
import { StyledTableHeaderWrapper, StyledTableTitle } from "@/shared/styles"
import { PacksModalType } from "@/modules/packs/api/types"
import { packsThunk } from "@/modules/packs/packs.slice"

export const PacksTableHeader = ({
  modalType,
  setModalType,
}: {
  modalType: PacksModalType
  setModalType: (modalData: PacksModalType) => void
}) => {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector((state) => state.packs.isLoading)
  const openDialogAddNewPack = () => {
    setModalType({
      actionType: "addPack",
    })
  }
  const addNewPack = (values: { value: string; private: boolean }) => {
    dispatch(
      packsThunk.newPack({
        cardsPack: { name: values.value, private: values.private },
      }),
    )
    setModalType(null)
  }
  return (
    <>
      {modalType?.actionType === "addPack" && (
        <CardsModal title={"Add new pack"} onClose={() => setModalType(null)}>
          <AddPackDialog
            onCancel={() => setModalType(null)}
            onSubmit={(values) => addNewPack(values)}
          />
        </CardsModal>
      )}
      <StyledTableHeaderWrapper>
        <StyledTableTitle>Packs list</StyledTableTitle>
        <StyledAddNewPackButton
          disabled={isLoading}
          onClick={openDialogAddNewPack}
        >
          Add New Pack
        </StyledAddNewPackButton>
      </StyledTableHeaderWrapper>
    </>
  )
}
