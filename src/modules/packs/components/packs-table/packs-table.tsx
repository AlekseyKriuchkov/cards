import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { packsThunk } from "@/modules/packs/packs.slice"
import { Table, TablePaginationConfig } from "antd"
import React from "react"
import { usePacksData } from "@/modules/packs/hooks/use-packs-data"
import { FilterValue } from "antd/es/table/interface"
import { ParamsPropsType } from "@/modules/packs"
import { PacksModalType } from "@/modules/packs/api/types"

interface PacksTableProps extends ParamsPropsType {
  onActionClick: (modalData: PacksModalType) => void
}

export const PacksTable: React.FC<PacksTableProps> = ({
  params,
  setParams,
  onActionClick,
}) => {
  const dispatch = useAppDispatch()

  const tableData = useAppSelector((state) => state.packs.cards)

  const isLoading = useAppSelector((state) => state.packs.isLoading)

  const { rows, columns } = usePacksData(onActionClick)

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
      packsThunk.setPacks({
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
  return (
    <>
      <Table
        size={"small"}
        columns={columns}
        dataSource={rows}
        scroll={{ y: 390 }}
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
    </>
  )
}
