import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { cardsThunk } from "@/modules/cards/cards.slice"
import { CardsTableHeader } from "@/modules/cards/components/cards-table-header/cards-table-header"
import { CardsTable } from "@/modules/cards/components/cards-table/cards-table"
import { CardsModalType } from "@/modules/cards/types"
import { PacksParams } from "@/modules/packs/types"
import { packsThunk } from "@/modules/packs/packs.slice"
import { CardsModal } from "@/shared/modal"
import { EditPackDialog } from "@/shared/edit-pack-modal/edit-pack-dialog"
import { DeletePackConfirmationDialog } from "@/shared/delete-pack-modal/delete-pack-confirmation-dialog"

export const CardsPage = () => {
  const { id } = useParams()

  const dispatch = useAppDispatch()

  const data = useAppSelector((state) => state.packs.cards)

  const [modalType, setModalType] = useState<CardsModalType>(null)

  const [params] = useState<PacksParams>({
    packName: "",
    page: 1,
    pageCount: 10,
    min: data?.minCardsCount,
    max: data?.maxCardsCount,
    sortPacks: "",
  })

  useEffect(() => {
    if (id) {
      dispatch(cardsThunk.setCards({ cardsPack_id: id }))
    }
  }, [dispatch, id])

  const handleEditPack = (values: { name: string; private: boolean }) => {
    dispatch(
      packsThunk.updateCardsPack({
        params: { ...params },
        cardsPack: {
          name: values.name,
          private: values.private,
          _id: id || "",
        },
      }),
    )
    setModalType(null)
  }

  const handleDeletePack = () => {
    dispatch(packsThunk.deletePack({ id: id || "" }))
    setModalType(null)
  }
  return (
    <>
      <CardsTableHeader setModalType={setModalType} />
      <CardsTable />
      {modalType?.actionType === "edit" && (
        <CardsModal title={"Edit pack"} onClose={() => setModalType(null)}>
          <EditPackDialog
            modalType={modalType}
            onCancel={() => setModalType(null)}
            onSubmit={(values) => handleEditPack(values)}
          />
        </CardsModal>
      )}
      {modalType?.actionType === "delete" && (
        <CardsModal title={"Delete pack"} onClose={() => setModalType(null)}>
          <DeletePackConfirmationDialog
            packName={modalType.packName ? modalType.packName : ""}
            onSubmit={() => handleDeletePack()}
            onCancel={() => setModalType(null)}
          />
        </CardsModal>
      )}
    </>
  )
}
