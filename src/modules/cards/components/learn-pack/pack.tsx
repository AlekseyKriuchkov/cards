import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useAppDispatch } from "@/app/hooks"
import { cardsThunk } from "@/modules/cards/cards.slice"

export const Pack = () => {
  const { id } = useParams()

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(cardsThunk.setCards({}))
  }, [])

  return <div>{id}</div>
}
