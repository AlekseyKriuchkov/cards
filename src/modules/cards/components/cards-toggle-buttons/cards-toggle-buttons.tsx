import React, { useState } from "react"
import { Button, Space } from "antd"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { cardsThunk } from "@/modules/cards/cards.slice"
import { useAuth } from "@/modules/auth/hooks/useAuth"

export const CardsToggleButtons = () => {
  const dispatch = useAppDispatch()
  const { user } = useAuth()
  const [toggleAll, setToggleAll] = useState(true)
  const data = useAppSelector((state) => state.cards)
  const isLoading = useAppSelector((state) => state.cards.isLoading)
  const setAll = () => {
    setToggleAll(true)
    dispatch(
      cardsThunk.setCards({
        page: data.cards?.page,
        pageCount: data.cards?.pageCount,
      }),
    )
  }
  const setMy = () => {
    setToggleAll(false)
    dispatch(
      cardsThunk.setCards({
        page: data.cards?.page,
        pageCount: data.cards?.pageCount,
        user_id: user?._id,
      }),
    )
  }
  return (
    <Space.Compact>
      <Button
        disabled={isLoading}
        type={toggleAll ? "default" : "primary"}
        onClick={setMy}
      >
        My
      </Button>
      <Button
        disabled={isLoading}
        type={toggleAll ? "primary" : "default"}
        onClick={setAll}
      >
        All
      </Button>
    </Space.Compact>
  )
}
