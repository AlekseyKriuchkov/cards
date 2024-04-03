import React from "react"
import Search from "antd/es/input/Search"
import { UseCardsData } from "@/modules/cards/hooks/use-cards-data"
import { Table } from "antd"
import { useAppSelector } from "@/app/hooks"

export const CardsTable = () => {
  const { rows, otherColumns, myPackColumns } = UseCardsData()

  const isLoading = useAppSelector((state) => state.cards.isLoading)

  const data = useAppSelector((state) => state.cards)

  const myId = useAppSelector((state) => state.auth.user?._id)

  const isMyPack = myId === data.card?.packUserId

  const suitableColumns = isMyPack ? myPackColumns : otherColumns

  const onSearch = () => {
    console.log("hi")
  }

  return (
    <>
      <Search
        disabled={false}
        allowClear
        placeholder="input search"
        onSearch={onSearch}
      />
      <Table
        style={{ marginTop: "30px" }}
        columns={suitableColumns}
        dataSource={rows}
        loading={isLoading}
      />
    </>
  )
}
