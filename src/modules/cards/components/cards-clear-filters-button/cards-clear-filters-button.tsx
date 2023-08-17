import React from "react"
import { Button } from "antd"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { cardsThunk } from "@/modules/cards/cards.slice"
import { ParamsPropsType } from "@/modules/cards"

export const CardsClearFiltersButton: React.FC<ParamsPropsType> = ({
  params,
  setParams,
}) => {
  const data = useAppSelector((state) => state.cards.cards)
  const isLoading = useAppSelector((state) => state.cards.isLoading)
  const dispatch = useAppDispatch()
  const clearFilters = () => {
    dispatch(
      cardsThunk.setCards({
        ...params,
        packName: "",
        page: 1,
        pageCount: 10,
        min: data?.minCardsCount,
        max: data?.maxCardsCount,
        user_id: "",
        sortPacks: "",
      }),
    )
    setParams({
      ...params,
      packName: "",
      page: 1,
      pageCount: 10,
      min: data?.minCardsCount,
      max: data?.maxCardsCount,
      user_id: "",
      sortPacks: "",
    })
  }
  return (
    <Button disabled={isLoading} type={"text"} onClick={clearFilters}>
      Clear filters
    </Button>
  )
}
