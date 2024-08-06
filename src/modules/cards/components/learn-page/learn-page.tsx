import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { GoToButton } from "@/shared/go-to-button/go-to-button"
import { StyledTableTitle } from "@/shared/styles"
import { cardsThunk } from "@/modules/cards/cards.slice"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { LearnCard } from "@/modules/cards/components/learn-card/learn-card"
import { CardType } from "@/modules/cards/types"

export const LearnPage = () => {
  const dispatch = useAppDispatch()

  const cardsData = useAppSelector((state) => state.cards?.card)

  console.log(cardsData)
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      dispatch(cardsThunk.setCards({ cardsPack_id: id }))
    }
  }, [dispatch, id])

  const randomCards = (cards: CardType[]) => {
    console.log(cards)
    return [...cards].sort(
      (card1, card2) => card2.shots / card2.grade - card1.shots / card1.grade,
    )
  }

  const sortedCards = randomCards(cardsData?.cards || [])

  console.log(sortedCards)

  const questionContent = sortedCards.map((el) => el.question)

  if (!questionContent.length) return

  return (
    <>
      <GoToButton text={"Go to Packs List"} />
      <StyledTableTitle>{cardsData?.packName}</StyledTableTitle>
      <LearnCard sortedCards={sortedCards} />
    </>
  )
}
