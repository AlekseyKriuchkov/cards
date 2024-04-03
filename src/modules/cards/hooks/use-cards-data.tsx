import React from "react"
import { useAppSelector } from "@/app/hooks"
import { Rate } from "antd"
import { CardsTableActionsBlock } from "@/modules/cards/components/cards-table-actions-block/cards-table-actions-block"

export const UseCardsData = () => {
  const tableData = useAppSelector((state) => state.cards.card?.cards)

  const otherColumns = [
    {
      key: "question",
      title: "Question",
      dataIndex: "question",
      sorter: true,
    },
    {
      key: "answer",
      title: "Answer",
      dataIndex: "answer",
      sorter: true,
    },
    {
      key: "updated",
      title: "Last Updated",
      dataIndex: "updated",
      sorter: true,
    },
    {
      key: "grade",
      title: "Grade",
      dataIndex: "grade",
      sorter: true,
    },
  ]

  const myPackColumns = [
    ...otherColumns,
    ...[
      {
        key: "action",
        title: "Actions",
        dataIndex: "action",
        width: "10%",
      },
    ],
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

  const rows = tableData?.map((card) => {
    return {
      key: card._id,
      question: card.question,
      answer: card.answer,
      updated: formatDate(card.updated),
      grade: <Rate defaultValue={card.grade} />,
      action: <CardsTableActionsBlock />,
    }
  })

  return { rows, otherColumns, myPackColumns }
}
