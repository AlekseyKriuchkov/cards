import { useAppSelector } from "@/app/hooks"
import { Pagination, Table, TablePaginationConfig } from "antd"
import React from "react"
import { usePacksData } from "@/modules/packs/hooks/use-packs-data"
import { FilterValue } from "antd/es/table/interface"
import {
  PacksModalType,
  PacksParams,
  UrlPacksParams,
} from "@/modules/packs/types"
import { StyledTableWrapper } from "@/modules/packs/components/packs-table/styles"

interface PacksTableProps extends PacksParams {
  onActionClick: (modalData: PacksModalType) => void
  setSearchParams?: (params: UrlPacksParams) => void
  onPageChange?: () => void
  handleSetPaginationTable: (page: number, pageCount: number) => void
  handleSetSortTable: (order: string, field: string) => void
}

export const PacksTable: React.FC<PacksTableProps> = ({
  onActionClick,
  handleSetPaginationTable,
  handleSetSortTable,
}) => {
  const tableData = useAppSelector((state) => state.packs.cards)

  const isLoading = useAppSelector((state) => state.packs.isLoading)

  const { rows, columns } = usePacksData(onActionClick)

  const onChangeSort = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: any,
  ) => {
    handleSetSortTable(sorter.order, sorter.field)
  }

  const onChangePagination = (page: number, pageCount: number) => {
    handleSetPaginationTable(page, pageCount)
  }

  return (
    <StyledTableWrapper>
      <Table
        size={"small"}
        columns={columns}
        dataSource={rows}
        scroll={{ y: 390 }}
        loading={isLoading}
        pagination={false}
        onChange={onChangeSort}
      />
      <Pagination
        total={tableData.cardPacksTotalCount}
        onChange={onChangePagination}
        disabled={isLoading}
        hideOnSinglePage
        showQuickJumper
      />
    </StyledTableWrapper>
  )
}
