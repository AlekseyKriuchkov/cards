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
import { EditPackDialog } from "@/shared/edit-pack-dialog/edit-pack-dialog"
import { DeletePackConfirmationDialog } from "@/shared/delete-pack-dialog/delete-pack-confirmation-dialog"
import { AddNewCardDialog } from "@/modules/cards/components/add-new-card-dialog/add-new-card-dialog"
import { Skeleton } from "antd"

export const CardsPage = () => {
  const { id } = useParams()

  const dispatch = useAppDispatch()

  const isCardsLoading = useAppSelector((state) => state.cards.isLoading)

  const isPacksLoading = useAppSelector((state) => state.packs.isLoading)

  const isLoading = isCardsLoading || isPacksLoading

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
      dispatch(cardsThunk.setCards({ ...params, cardsPack_id: id }))
    }
  }, [dispatch, id, params])

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

  const handleAddNewCard = (values: { question: string; answer: string }) => {
    dispatch(
      cardsThunk.newCard({
        card: {
          cardsPack_id: id || "",
          question: values.question,
          answer: values.answer,
        },
      }),
    )
    setModalType(null)
  }

  return (
    <>
      <CardsTableHeader isLoading={isLoading} setModalType={setModalType} />
      {isLoading ? <Skeleton paragraph={{ rows: 15 }} /> : <CardsTable />}
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
      {modalType?.actionType === "addNewCard" && (
        <CardsModal title={"Add New Card"} onClose={() => setModalType(null)}>
          <AddNewCardDialog
            onCancel={() => setModalType(null)}
            onSubmit={(values) => handleAddNewCard(values)}
          />
        </CardsModal>
      )}
    </>
  )
}
