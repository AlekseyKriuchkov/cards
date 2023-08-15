import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { cardsThunk } from "@/modules/cards/cards.slice"
import { Button, Space, Table } from "antd"

export const CardsTable = () => {
  const dispatch = useAppDispatch()

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

  const tableData = useAppSelector((state) => state.cards.cards)
  console.log(tableData)
  return (
    <Table
      size={"small"}
      columns={columns}
      dataSource={tableData?.cardPacks}
      scroll={{ y: 300 }}
      onChange={(pagination) => {
        dispatch(
          cardsThunk.setCards({
            page: pagination.current,
            pageCount: pagination.pageSize,
          }),
        )
      }}
      pagination={{
        pageSizeOptions: ["10", "20", "50"],
        showQuickJumper: true,
        showSizeChanger: true,
        total: tableData?.cardPacksTotalCount,
      }}
    />
  )
}