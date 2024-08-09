import { GoToButton } from "@/shared/go-to-button/go-to-button"
import { StyledTableHeaderWrapper, StyledTableTitle } from "@/shared/styles"
import React from "react"
import { useAppSelector } from "@/app/hooks"
import { Space } from "antd"
import { StyledHeaderPackButtons } from "@/modules/cards/components/cards-table-header/styles"
import { CardsModalType } from "@/modules/cards/types"
import { NavLink, useParams } from "react-router-dom"

type PropsType = {
  setModalType: (ModalType: CardsModalType) => void
}

export const CardsTableHeader: React.FC<PropsType> = ({ setModalType }) => {
  const data = useAppSelector((state) => state.cards)

  const { id } = useParams()

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
            <StyledHeaderPackButtons
              onClick={() =>
                setModalType({
                  actionType: "edit",
                  packName: data.card?.packName,
                  private: data.card?.packPrivate,
                })
              }
              disabled={isLoading}
            >
              Edit Pack
            </StyledHeaderPackButtons>
            <StyledHeaderPackButtons
              onClick={() => setModalType({ actionType: "delete" })}
              disabled={isLoading}
            >
              Delete Pack
            </StyledHeaderPackButtons>
            <StyledHeaderPackButtons disabled={disabledLearnButton}>
              <NavLink to={`/learn/${id}`}>Learn Pack</NavLink>
            </StyledHeaderPackButtons>
            <StyledHeaderPackButtons onClick={() => {}} disabled={isLoading}>
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
            <NavLink to={`/learn/${id}`}>Learn Pack</NavLink>
          </StyledHeaderPackButtons>
        </Space.Compact>
      </StyledTableHeaderWrapper>
    </div>
  )
}
