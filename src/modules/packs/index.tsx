import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { packsThunk } from "@/modules/packs/packs.slice"
import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import { PacksTable } from "@/modules/packs/components/packs-table/packs-table"
import { PacksTableHeader } from "@/modules/packs/components/packs-table-header/packs-table-header"
import { PacksTableToolbar } from "@/modules/packs/components/packs-table-toolbar/packs-table-toolbar"
import { GetCardsPackType, PacksModalType } from "@/modules/packs/api/types"
import { CardsModal } from "@/shared/modal"
import { DeletePackConfirmationDialog } from "@/modules/packs/components/delete-pack-modal/delete-pack-confirmation-dialog"
import { EditPackDialog } from "@/modules/packs/components/edit-pack-modal/edit-pack-dialog"

export type ParamsPropsType = {
  params: GetCardsPackType
  setParams: Dispatch<SetStateAction<GetCardsPackType>>
}

export const Packs = () => {
  const dispatch = useAppDispatch()

  const data = useAppSelector((state) => state.packs.cards)

  const [modalType, setModalType] = useState<PacksModalType>(null)

  const [params, setParams] = useState<GetCardsPackType>({
    packName: "",
    page: 1,
    pageCount: 10,
    min: data?.minCardsCount,
    max: data?.maxCardsCount,
    user_id: "",
    sortPacks: "",
  })
  useEffect(() => {
    dispatch(
      packsThunk.setPacks({
        ...params,
      }),
    )
  }, [])
  useEffect(() => {
    setParams({ ...params, min: data?.minCardsCount, max: data?.maxCardsCount })
  }, [data?.minCardsCount, data?.maxCardsCount])

  const editPack = (values: { name: string; private: boolean }) => {
    dispatch(
      packsThunk.updateCardsPack({
        params: { ...params },
        cardsPack: {
          name: values.name,
          private: values.private,
          _id: modalType?.packId || "",
        },
      }),
    )
    setModalType(null)
  }

  const deletePack = (packId: string) => {
    dispatch(packsThunk.deletePack({ id: packId }))
    setModalType(null)
  }

  return (
    <>
      {modalType?.actionType === "delete" && (
        <CardsModal title={"Delete pack"} onClose={() => setModalType(null)}>
          <DeletePackConfirmationDialog
            packName={modalType.packName ? modalType.packName : ""}
            onSubmit={() =>
              deletePack(modalType.packId ? modalType.packId : "")
            }
            onCancel={() => setModalType(null)}
          />
        </CardsModal>
      )}
      {modalType?.actionType === "edit" && (
        <CardsModal title={"Edit pack"} onClose={() => setModalType(null)}>
          <EditPackDialog
            modalType={modalType}
            onCancel={() => setModalType(null)}
            onSubmit={(values) => editPack(values)}
          />
        </CardsModal>
      )}

      <PacksTableHeader modalType={modalType} setModalType={setModalType} />
      <PacksTableToolbar params={params} setParams={setParams} />
      <PacksTable
        params={params}
        setParams={setParams}
        onActionClick={setModalType}
      />
    </>
  )
}
