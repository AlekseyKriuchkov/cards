import { GoToButton } from "@/shared/go-to-button/go-to-button"
import { StyledTableHeaderWrapper, StyledTableTitle } from "@/shared/styles"
import React from "react"
import { useAppSelector } from "@/app/hooks"
import { Space } from "antd"
import { StyledHeaderPackButtons } from "@/modules/cards/components/cards-table-header/styles"

export const CardsTableHeader = () => {
  const data = useAppSelector((state) => state.cards)

  const isLoading = useAppSelector((state) => state.cards.isLoading)

  const disabledLearnButton = isLoading ? true : !data.card?.cardsTotalCount

  const myId = useAppSelector((state) => state.auth.user?._id)

  const isMyPack = myId === data.card?.packUserId

  if (isMyPack) {
    return (
      <div>
        <GoToButton text={"Go to Packs List"} />
        <StyledTableHeaderWrapper>
          <StyledTableTitle>{data.card?.packName}</StyledTableTitle>
          <Space.Compact>
            <StyledHeaderPackButtons disabled={isLoading}>
              Edit Pack
            </StyledHeaderPackButtons>
            <StyledHeaderPackButtons disabled={isLoading}>
              Delete Pack
            </StyledHeaderPackButtons>
            <StyledHeaderPackButtons disabled={disabledLearnButton}>
              Learn Pack
            </StyledHeaderPackButtons>
            <StyledHeaderPackButtons disabled={isLoading}>
              Add New Card
            </StyledHeaderPackButtons>
          </Space.Compact>
        </StyledTableHeaderWrapper>
      </div>
    )
  }
  return (
    <div>
      <GoToButton text={"Go to Packs List"} />
      <StyledTableHeaderWrapper>
        <StyledTableTitle>{data.card?.packName}</StyledTableTitle>
        <Space.Compact>
          <StyledHeaderPackButtons disabled={disabledLearnButton}>
            Learn Pack
          </StyledHeaderPackButtons>
        </Space.Compact>
      </StyledTableHeaderWrapper>
    </div>
  )
}
