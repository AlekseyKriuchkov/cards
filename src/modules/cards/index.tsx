import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { cardsThunk } from "@/modules/cards/cards.slice"
import { useEffect, useState } from "react"
import { CardsTable } from "@/modules/cards/components/cards-table/cards-table"
import { CardsTableHeader } from "@/modules/cards/components/cards-table-header/cards-table-header"
import { useAuth } from "@/modules/auth/hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { CardsTableToolbar } from "@/modules/cards/components/cards-table-toolbar/cards-table-toolbar"
import { GetCardsPackType } from "@/modules/cards/api/types"

export type ParamsPropsType = {
  params: GetCardsPackType
  setParams: SetParamsType
}
type SetParamsType = (params: GetCardsPackType) => void

export const Cards = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.cards.cards)
  const [params, setParams] = useState({})
  const { isAuthorized } = useAuth()
  const navigate = useNavigate()

  console.log(params)
  useEffect(() => {
    if (!isAuthorized) navigate("/sign-in")
  }, [isAuthorized])
  useEffect(() => {
    dispatch(
      cardsThunk.setCards({
        ...params,
        page: 1,
        pageCount: 10,
        min: data?.minCardsCount,
        max: data?.maxCardsCount,
      }),
    )
    setParams({
      ...params,
      page: 1,
      pageCount: 10,
      min: data?.minCardsCount,
      max: data?.maxCardsCount,
    })
  }, [])
  return (
    <>
      <CardsTableHeader />
      <CardsTableToolbar params={params} setParams={setParams} />
      <CardsTable params={params} setParams={setParams} />
    </>
  )
}
