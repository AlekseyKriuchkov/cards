import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch } from "@/app/hooks"
import { cardsThunk } from "@/modules/cards/cards.slice"
import { CardsTableHeader } from "@/modules/cards/components/cards-table-header/cards-table-header"
import { CardsTable } from "@/modules/cards/components/cards-table/cards-table"

export const Pack = () => {
  const { id } = useParams()

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (id) {
      dispatch(cardsThunk.setCards({ cardsPack_id: id }))
    }
  }, [])

  return (
    <>
      <CardsTableHeader />
      <CardsTable />
    </>
  )
}
