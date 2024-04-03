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
import { useAppDispatch } from "@/app/hooks"
import { setModalType } from "@/modules/packs/packs.slice"

type PropsType = {
  isMyPack: boolean
  pack_id: string
  pack_name: string
  private_pack: boolean
  cardsCount: number
}

export const TableActionsButtonsBlock: React.FC<PropsType> = ({
  isMyPack,
  pack_id,
  pack_name,
  private_pack,
  cardsCount,
}) => {
  const dispatch = useAppDispatch()

  const deleteHandler = () => {
    dispatch(
      setModalType({
        modalType: "delete",
        pack_id: pack_id,
        pack_name: pack_name,
      }),
    )
  }
  const editHandler = () => {
    dispatch(
      setModalType({
        modalType: "edit",
        pack_id: pack_id,
        pack_name: pack_name,
        private: private_pack,
      }),
    )
  }
  const learnHandler = () => {
    dispatch(
      setModalType({
        modalType: "learn",
        pack_id: pack_id,
        pack_name: pack_name,
      }),
    )
  }

  const disabledButton = !cardsCount

  if (isMyPack)
    return (
      <PacksTableActionsBlockStyledWrapper>
        <CardsTableActionsBlockStyledButton
          disabled={disabledButton}
          onClick={learnHandler}
        >
          <PlaySquareOutlined />
        </CardsTableActionsBlockStyledButton>
        <CardsTableActionsBlockStyledButton onClick={editHandler}>
          <EditOutlined />
        </CardsTableActionsBlockStyledButton>
        <CardsTableActionsBlockStyledButton onClick={deleteHandler}>
          <DeleteOutlined />
        </CardsTableActionsBlockStyledButton>
      </PacksTableActionsBlockStyledWrapper>
    )
  return (
    <PacksTableActionsBlockStyledWrapper>
      <CardsTableActionsBlockStyledButton
        disabled={disabledButton}
        onClick={learnHandler}
      >
        <PlaySquareOutlined />
      </CardsTableActionsBlockStyledButton>
    </PacksTableActionsBlockStyledWrapper>
  )
}
