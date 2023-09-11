import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { cardsThunk } from "@/modules/cards/cards.slice"
import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import { CardsTable } from "@/modules/cards/components/cards-table/cards-table"
import { CardsTableHeader } from "@/modules/cards/components/cards-table-header/cards-table-header"
import { CardsTableToolbar } from "@/modules/cards/components/cards-table-toolbar/cards-table-toolbar"
import { GetCardsPackType } from "@/modules/cards/api/types"

export type ParamsPropsType = {
  params: GetCardsPackType
  setParams: Dispatch<SetStateAction<GetCardsPackType>>
}

export const Cards = () => {
  const dispatch = useAppDispatch()

  const data = useAppSelector((state) => state.cards.cards)

  const [params, setParams] = useState<GetCardsPackType>({
    packName: "",
    page: 1,
    pageCount: 10,
    min: data?.minCardsCount,
    max: data?.maxCardsCount,
    user_id: "",
    sortPacks: "",
  })

  useEffect(() => {
    dispatch(
      cardsThunk.setCards({
        ...params,
      }),
    )
  }, [])

  useEffect(() => {
    setParams({ ...params, min: data?.minCardsCount, max: data?.maxCardsCount })
  }, [data?.minCardsCount, data?.maxCardsCount])

  return (
    <>
      <CardsTableHeader />
      <CardsTableToolbar params={params} setParams={setParams} />
      <CardsTable params={params} setParams={setParams} />
    </>
  )
}
