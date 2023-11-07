import React from "react"
import { useAppSelector } from "@/app/hooks"
import { TableActionsButtonsBlock } from "@/modules/cards/components/table-actions-buttons-block/table-actions-buttons-block"
import { NavLink } from "react-router-dom"

export const UsePacksData = () => {
  const myId = useAppSelector((state) => state.auth.user?._id)
  const tableData = useAppSelector((state) => state.cards.cards?.cardPacks)

  const columns = [
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
      sorter: true,
    },
    {
      key: "cardsCount",
      title: "Cards",
      dataIndex: "cardsCount",
      width: "10%",
      sorter: true,
    },
    {
      key: "user_name",
      title: "Created By",
      dataIndex: "user_name",
      sorter: true,
    },
    {
      key: "updated",
      title: "Last Updated",
      dataIndex: "updated",
      sorter: true,
    },
    {
      key: "action",
      title: "Actions",
      dataIndex: "action",
      width: "10%",
    },
  ]

  const setLeadingZero = (num: number) => {
    return num < 10 ? `0${num}` : num
  }
  const formatDate = (str: string) => {
    let date = new Date(str)
    return `${setLeadingZero(date.getUTCDate())}.${setLeadingZero(
      date.getUTCMonth() + 1,
    )}.${setLeadingZero(date.getUTCFullYear())}`
  }

  const rows = tableData?.map((pack) => {
    const isMyPack = myId === pack.user_id

    return {
      name: <NavLink to={`pack/${pack._id}`}>{pack.name}</NavLink>,
      user_name: pack.user_name,
      cardsCount: pack.cardsCount,
      updated: formatDate(pack.updated),
      action: (
        <TableActionsButtonsBlock
          pack_id={pack._id}
          pack_name={pack.name}
          private_pack={pack.private}
          isMyPack={isMyPack}
          cardsCount={pack.cardsCount}
        />
      ),
    }
  })
  return { rows, columns }
}
