import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { cardsThunk } from "@/modules/cards/cards.slice"
import { Skeleton, Table } from "antd"
import React from "react"
import { ParamsPropsType } from "@/modules/cards"
import { UsePacksData } from "@/modules/cards/hooks/use-packs-data"

export const CardsTable: React.FC<ParamsPropsType> = ({
  params,
  setParams,
}) => {
  const dispatch = useAppDispatch()

  const tableData = useAppSelector((state) => state.cards.cards)
  const isLoading = useAppSelector((state) => state.cards.isLoading)
  const { rows, columns } = UsePacksData()

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
  if (isLoading) {
    return <Skeleton active paragraph={{ rows: 10 }} />
  }
  return (
    <Table
      size={"small"}
      columns={columns}
      dataSource={rows}
      scroll={{ y: 335 }}
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
