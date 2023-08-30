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
}

export const TableActionsButtonsBlock: React.FC<PropsType> = ({
  isMyPack,
  pack_id,
}) => {
  const dispatch = useAppDispatch()

  const func = () => {
    dispatch(setModalType({ modalType: "delete", pack_id: pack_id }))
  }

  if (isMyPack)
    return (
      <StyledWrapper>
        <StyledSpan onClick={() => {}}>
          <PlaySquareOutlined />
        </StyledSpan>
        <StyledSpan onClick={() => {}}>
          <EditOutlined />
        </StyledSpan>
        <StyledSpan onClick={func}>
          <DeleteOutlined />
        </StyledSpan>
      </StyledWrapper>
    )
  return (
    <StyledWrapper>
      <StyledSpan onClick={() => {}}>
        <PlaySquareOutlined />
      </StyledSpan>
    </StyledWrapper>
  )
}
