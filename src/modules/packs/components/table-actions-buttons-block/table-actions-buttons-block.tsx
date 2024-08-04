import React from "react"
import {
  DeleteOutlined,
  EditOutlined,
  PlaySquareOutlined,
} from "@ant-design/icons"
import {
  CardsTableActionsBlockStyledButton,
  PacksTableActionsBlockStyledWrapper,
} from "@/modules/packs/components/table-actions-buttons-block/styles"
import { PacksModalType } from "@/modules/packs/types"

type PropsType = {
  isMyPack: boolean
  pack_id: string
  pack_name: string
  private_pack: boolean
  cardsCount: number
  onActionClick: (modalData: PacksModalType) => void
}

export const TableActionsButtonsBlock: React.FC<PropsType> = ({
  isMyPack,
  pack_id,
  pack_name,
  private_pack,
  cardsCount,
  onActionClick,
}) => {
  const deleteHandler = () => {
    onActionClick({
      actionType: "delete",
      packId: pack_id,
      packName: pack_name,
    })
  }
  const editHandler = () => {
    onActionClick({
      actionType: "edit",
      packId: pack_id,
      packName: pack_name,
      private: private_pack,
    })
  }
  const learnHandler = () => {
    // dispatch(
    //   setModalType({
    //     modalType: "learn",
    //     pack_id: pack_id,
    //     pack_name: pack_name,
    //   }),
    // )
  }

  const disabledButton = !cardsCount

  return (
    <PacksTableActionsBlockStyledWrapper>
      <CardsTableActionsBlockStyledButton
        disabled={disabledButton}
        onClick={learnHandler}
      >
        <PlaySquareOutlined />
      </CardsTableActionsBlockStyledButton>
      {isMyPack ? (
        <>
          <CardsTableActionsBlockStyledButton onClick={editHandler}>
            <EditOutlined />
          </CardsTableActionsBlockStyledButton>
          <CardsTableActionsBlockStyledButton onClick={deleteHandler}>
            <DeleteOutlined />
          </CardsTableActionsBlockStyledButton>
        </>
      ) : null}
    </PacksTableActionsBlockStyledWrapper>
  )
}
