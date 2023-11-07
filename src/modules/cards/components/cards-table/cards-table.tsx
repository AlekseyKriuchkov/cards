import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { cardsThunk } from "@/modules/cards/cards.slice"
import { Table, TablePaginationConfig } from "antd"
import React from "react"
import { ParamsPropsType } from "@/modules/cards"
import { UsePacksData } from "@/modules/cards/hooks/use-packs-data"
import { CardsModal } from "@/modules/cards/components/modal"
import { DeletePackModal } from "@/modules/cards/components/delete-pack-modal/delete-pack-modal"
import { EditPackModal } from "@/modules/cards/components/edit-pack-modal/edit-pack-modal"
import { FilterValue } from "antd/es/table/interface"
import { useNavigate } from "react-router-dom"

export const CardsTable: React.FC<ParamsPropsType> = ({
  params,
  setParams,
}) => {
  const dispatch = useAppDispatch()

  const navigate = useNavigate()

  const tableData = useAppSelector((state) => state.cards.cards)

  const isLoading = useAppSelector((state) => state.cards.isLoading)

  const modalType = useAppSelector((state) => state.cards.modalType)

  const { rows, columns } = UsePacksData()

  const onChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: any,
  ) => {
    const sortRequest: string =
      (sorter.order === "ascend" && `1${sorter.field}`) ||
      (sorter.order === "descend" && `0${sorter.field}`) ||
      sorter.field
    console.log(sortRequest)
    dispatch(
      cardsThunk.setCards({
        ...params,
        sortPacks: sortRequest,
        page: pagination.current,
        pageCount: pagination.pageSize,
      }),
    )
    setParams({
      ...params,
      sortPacks: sortRequest,
      page: pagination.current,
      pageCount: pagination.pageSize,
    })
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
  if (modalType?.modalType === "edit") {
    return (
      <>
        <CardsModal title={"Edit pack"}>
          <EditPackModal />
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
  if (modalType?.modalType === "learn") {
    navigate(`pack/${modalType.pack_id}`)
  }
  return (
    <Table
      size={"small"}
      columns={columns}
      dataSource={rows}
      scroll={{ y: 320 }}
      loading={isLoading}
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
