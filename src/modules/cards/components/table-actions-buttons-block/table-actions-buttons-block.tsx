import React from "react"
import {
  DeleteOutlined,
  EditOutlined,
  PlaySquareOutlined,
} from "@ant-design/icons"
import {
  StyledSpan,
  StyledWrapper,
} from "@/modules/cards/components/table-actions-buttons-block/styles"
import { useAppDispatch } from "@/app/hooks"
import { setModalType } from "@/modules/cards/cards.slice"

type PropsType = {
  isMyPack: boolean
  pack_id: string
  pack_name: string
  private_pack: boolean
}

export const TableActionsButtonsBlock: React.FC<PropsType> = ({
  isMyPack,
  pack_id,
  pack_name,
  private_pack,
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

  if (isMyPack)
    return (
      <StyledWrapper>
        <StyledSpan onClick={learnHandler}>
          <PlaySquareOutlined />
        </StyledSpan>
        <StyledSpan onClick={editHandler}>
          <EditOutlined />
        </StyledSpan>
        <StyledSpan onClick={deleteHandler}>
          <DeleteOutlined />
        </StyledSpan>
      </StyledWrapper>
    )
  return (
    <StyledWrapper>
      <StyledSpan onClick={learnHandler}>
        <PlaySquareOutlined />
      </StyledSpan>
    </StyledWrapper>
  )
}
