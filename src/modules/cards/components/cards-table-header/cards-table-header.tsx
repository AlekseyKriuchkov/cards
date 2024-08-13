import { GoToButton } from "@/shared/go-to-button/go-to-button"
import { StyledTableHeaderWrapper, StyledTableTitle } from "@/shared/styles"
import React from "react"
import { useAppSelector } from "@/app/hooks"
import { Skeleton, Space } from "antd"
import { StyledHeaderPackButtons } from "@/modules/cards/components/cards-table-header/styles"
import { CardsModalType } from "@/modules/cards/types"
import { useNavigate, useParams } from "react-router-dom"

type PropsType = {
  setModalType: (ModalType: CardsModalType) => void
  isLoading: boolean
}

export const CardsTableHeader: React.FC<PropsType> = ({
  setModalType,
  isLoading,
}) => {
  const navigate = useNavigate()

  const cardsData = useAppSelector((state) => state.cards)

  const { id } = useParams()

  const disabledLearnButton = isLoading
    ? true
    : !cardsData.card?.cardsTotalCount

  const myId = useAppSelector((state) => state.auth.user?._id)

  const isMyPack = myId === cardsData.card?.packUserId

  const goToLearnHandler = () => {
    navigate(`/learn/${id}`)
  }

  if (isMyPack) {
    return (
      <>
        <GoToButton text={"Go to Packs List"} />
        <StyledTableHeaderWrapper>
          {isLoading ? (
            <Skeleton.Input />
          ) : (
            <StyledTableTitle>{cardsData.card?.packName}</StyledTableTitle>
          )}
          <Space.Compact>
            <StyledHeaderPackButtons
              onClick={() =>
                setModalType({
                  actionType: "edit",
                  packName: cardsData.card?.packName,
                  private: cardsData.card?.packPrivate,
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
            <StyledHeaderPackButtons
              disabled={disabledLearnButton}
              onClick={goToLearnHandler}
            >
              Learn Pack
            </StyledHeaderPackButtons>
            <StyledHeaderPackButtons
              onClick={() => {
                setModalType({ actionType: "addNewCard" })
              }}
              disabled={isLoading}
            >
              Add New Card
            </StyledHeaderPackButtons>
          </Space.Compact>
        </StyledTableHeaderWrapper>
      </>
    )
  }
  return (
    <>
      <GoToButton text={"Go to Packs List"} />
      <StyledTableHeaderWrapper>
        <StyledTableTitle>{cardsData.card?.packName}</StyledTableTitle>
        <Space.Compact>
          <StyledHeaderPackButtons
            disabled={disabledLearnButton}
            onClick={goToLearnHandler}
          >
            Learn Pack
          </StyledHeaderPackButtons>
        </Space.Compact>
      </StyledTableHeaderWrapper>
    </>
  )
}
