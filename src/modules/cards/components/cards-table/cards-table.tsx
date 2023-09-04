import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { cardsThunk } from "@/modules/cards/cards.slice"
import { Skeleton, Table } from "antd"
import React from "react"
import { ParamsPropsType } from "@/modules/cards"
import { UsePacksData } from "@/modules/cards/hooks/use-packs-data"
import { CardsModal } from "@/modules/cards/components/modal"
import { DeletePackModal } from "@/modules/cards/components/delete-pack-modal/delete-pack-modal"

export const CardsTable: React.FC<ParamsPropsType> = ({
  params,
  setParams,
}) => {
  const dispatch = useAppDispatch()

  const tableData = useAppSelector((state) => state.cards.cards)

  const isLoading = useAppSelector((state) => state.cards.isLoading)

  const modalType = useAppSelector((state) => state.cards.modalType)

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
  if (modalType?.modalType === "delete") {
    return (
      <>
        <CardsModal title={"Delete pack"}>
          <DeletePackModal
            pack_name={modalType.pack_name ? modalType.pack_name : ""}
            pack_id={modalType.pack_id ? modalType.pack_id : ""}
          />
        </CardsModal>
        <Table
          size={"small"}
          columns={columns}
          dataSource={rows}
          scroll={{ y: 320 }}
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
      </>
    )
  }
  if (modalType?.modalType === "update") {
    console.log("update")
  }
  if (modalType?.modalType === "learn") {
    console.log("learn")
  }
  return (
    <Table
      size={"small"}
      columns={columns}
      dataSource={rows}
      scroll={{ y: 320 }}
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
