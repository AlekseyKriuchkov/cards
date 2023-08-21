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

type PropsType = {
  isMyPack: boolean
}

export const TableActionsButtonsBlock: React.FC<PropsType> = ({ isMyPack }) => {
  if (isMyPack)
    return (
      <StyledWrapper>
        <StyledSpan onClick={() => {}}>
          <PlaySquareOutlined />
        </StyledSpan>
        <StyledSpan onClick={() => {}}>
          <EditOutlined />
        </StyledSpan>
        <StyledSpan onClick={() => {}}>
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
