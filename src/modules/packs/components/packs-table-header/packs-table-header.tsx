import { StyledAddNewPackButton } from "@/modules/packs/components/packs-table-header/styles"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import React, { useState } from "react"
import { CardsModal } from "@/shared/modal"
import { AddPackDialog } from "@/modules/packs/components/add-new-pack-modal/add-pack-dialog"
import { StyledTableHeaderWrapper, StyledTableTitle } from "@/shared/styles"
import { packsThunk } from "@/modules/packs/packs.slice"

export const PacksTableHeader = () => {
  const dispatch = useAppDispatch()

  const [isAddPackModalOpen, setIsAddPackModalOpen] = useState(false)

  const isLoading = useAppSelector((state) => state.packs.isLoading)
  const openDialogAddNewPack = () => {
    setIsAddPackModalOpen(true)
  }
  const addNewPack = (values: { value: string; private: boolean }) => {
    dispatch(
      packsThunk.newPack({
        cardsPack: { name: values.value, private: values.private },
      }),
    )
    setIsAddPackModalOpen(false)
  }
  return (
    <>
      {isAddPackModalOpen && (
        <CardsModal
          title={"Add new pack"}
          onClose={() => setIsAddPackModalOpen(false)}
        >
          <AddPackDialog
            onCancel={() => setIsAddPackModalOpen(false)}
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
