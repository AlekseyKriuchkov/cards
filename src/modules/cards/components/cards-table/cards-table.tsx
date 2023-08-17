import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { cardsThunk } from "@/modules/cards/cards.slice"
import { Button, Space, Table } from "antd"
import React from "react"
import { ParamsPropsType } from "@/modules/cards"

export const CardsTable: React.FC<ParamsPropsType> = ({
  params,
  setParams,
}) => {
  const dispatch = useAppDispatch()

  const tableData = useAppSelector((state) => state.cards.cards)
  const date = tableData?.cardPacks
    .map((el) => el.updated)
    .map((el) => new Date(el))

  const columns = [
    {
      key: "No cover",
      title: "Cover",
      dataIndex: "No cover",
    },
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
      title: "Actions",
      key: "action",
      render: () => (
        <Space size="middle">
          <Button
            onClick={() => {
              alert(1)
            }}
          >
            One
          </Button>
          <Button
            onClick={() => {
              alert(2)
            }}
          >
            Two
          </Button>
        </Space>
      ),
    },
  ]

  const onChange = (pagination: any) => {
    dispatch(
      cardsThunk.setCards({
        ...params,
        page: pagination.current,
        pageCount: pagination.pageSize,
      }),
    )
    setParams({
      ...params,
      page: pagination.current,
      pageCount: pagination.pageSize,
    })
  }
  return (
    <Table
      size={"small"}
      columns={columns}
      dataSource={tableData?.cardPacks}
      scroll={{ y: 350 }}
      pagination={{
        pageSizeOptions: ["10", "20", "50"],
        showQuickJumper: true,
        showSizeChanger: true,
        total: tableData?.cardPacksTotalCount,
        current: params.page,
        pageSize: params.pageCount,
      }}
      onChange={onChange}
    />
  )
}
