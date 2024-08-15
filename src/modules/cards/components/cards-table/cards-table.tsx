import Search from "antd/es/input/Search"
import { UseCardsData } from "@/modules/cards/hooks/use-cards-data"
import { Table } from "antd"
import { useAppSelector } from "@/app/hooks"
import { CardsModalType } from "@/modules/cards/types"
import React from "react"

type PropsType = {
  setCardModalType: (modalData: CardsModalType) => void
}

export const CardsTable: React.FC<PropsType> = ({ setCardModalType }) => {
  const { rows, otherColumns, myPackColumns } = UseCardsData(setCardModalType)

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
      />
    </>
  )
}
