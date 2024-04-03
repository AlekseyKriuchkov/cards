import Search from "antd/es/input/Search"
import { StyledTableToolbarWrapper } from "@/modules/packs/components/packs-table-toolbar/styles"
import { PacksToggleButtons } from "@/modules/packs/components/packs-toggle-buttons/packs-toggle-buttons"
import { PacksToolbarSlider } from "@/modules/packs/components/packs-toolbar-slider/packs-toolbar-slider"
import React from "react"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { packsThunk } from "@/modules/packs/packs.slice"
import { PacksClearFiltersButton } from "@/modules/packs/components/packs-clear-filters-button/packs-clear-filters-button"
import { ParamsPropsType } from "@/modules/packs"

export const PacksTableToolbar: React.FC<ParamsPropsType> = ({
  params,
  setParams,
}) => {
  const isLoading = useAppSelector((state) => state.packs.isLoading)
  const dispatch = useAppDispatch()
  const onSearch = (value: string) => {
    dispatch(packsThunk.setPacks({ ...params, packName: value }))
    setParams({ ...params, packName: value })
  }

  return (
    <StyledTableToolbarWrapper>
      <Search
        disabled={isLoading}
        allowClear
        placeholder="input search"
        onSearch={onSearch}
        style={{ width: 200 }}
      />
      <PacksToggleButtons />
      <PacksToolbarSlider params={params} setParams={setParams} />
      <PacksClearFiltersButton params={params} setParams={setParams} />
    </StyledTableToolbarWrapper>
  )
}
