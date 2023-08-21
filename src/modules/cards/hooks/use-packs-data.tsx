import React from "react"
import { useAppSelector } from "@/app/hooks"
import { Button } from "antd"

export const UsePacksData = () => {
  const myId = useAppSelector((state) => state.auth.user?._id)
  const tableData = useAppSelector((state) => state.cards.cards?.cardPacks)

  const columns = [
    {
      key: "name",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "cardsCount",
      title: "Cards",
      dataIndex: "cardsCount",
    },
    {
      key: "user_name",
      title: "Created By",
      dataIndex: "user_name",
    },
    {
      key: "updated",
      title: "Last Updated",
      dataIndex: "updated",
    },
    {
      key: "action",
      title: "Actions",
      dataIndex: "action",
    },
  ]

  const handleEdit = () => {
    alert("Edit")
  }
  const handleDelete = () => {
    alert("Delete")
  }
  const handleLearn = () => {
    alert("Learn")
  }
  const rows = tableData?.map((pack) => {
    const isMyPack = myId === pack.user_id

    return {
      name: pack.name,
      user_name: pack.user_name,
      cardsCount: pack.cardsCount,
      updated: new Date(pack.updated),
      action: isMyPack ? (
        <div>
          <Button onClick={handleLearn}>Learn</Button>
          <Button onClick={handleEdit}>Edit</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </div>
      ) : (
        <div>
          <Button onClick={handleLearn}>Learn</Button>
        </div>
      ),
    }
  })
  return { rows, columns }
}
