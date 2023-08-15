import React from "react"
import { Button } from "antd"
import { useAppDispatch } from "@/app/hooks"
import { cardsThunk } from "@/modules/cards/cards.slice"

export const CardsClearFiltersButton = () => {
  const dispatch = useAppDispatch()
  const clearFilters = () => {
    dispatch(cardsThunk.setCards({ page: 1, pageCount: 10 }))
  }
  return (
    <Button type={"text"} onClick={clearFilters}>
      Clear filters
    </Button>
  )
}
