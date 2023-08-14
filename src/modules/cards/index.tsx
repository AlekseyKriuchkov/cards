import { useAppDispatch } from "@/app/hooks"
import { cardsThunk } from "@/modules/cards/cards.slice"
import { useEffect } from "react"
import { CardsTable } from "@/modules/cards/components/cards-table/cards-table"
import { CardsTableHeader } from "@/modules/cards/components/cards-table-header/cards-table-header"
import { useAuth } from "@/modules/auth/hooks/useAuth"
import { useNavigate } from "react-router-dom"
import { CardsTableToolbar } from "@/modules/cards/components/cards-table-toolbar/cards-table-toolbar"

export const Cards = () => {
  const dispatch = useAppDispatch()
  const { isAuthorized } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    if (!isAuthorized) navigate("/sign-in")
  }, [isAuthorized])
  useEffect(() => {
    dispatch(cardsThunk.setCards({ page: 1, pageCount: 10 }))
  }, [])
  return (
    <>
      <CardsTableHeader />
      <CardsTableToolbar />
      <CardsTable />
    </>
  )
}
