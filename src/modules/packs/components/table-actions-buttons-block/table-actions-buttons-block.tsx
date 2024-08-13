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
import { useNavigate } from "react-router-dom"

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
  const navigate = useNavigate()
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
    navigate(`/learn/${pack_id}`)
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
