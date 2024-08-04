import Search from "antd/es/input/Search"
import { StyledTableToolbarWrapper } from "@/modules/packs/components/packs-table-toolbar/styles"
import { PacksToggleButtons } from "@/modules/packs/components/packs-toggle-buttons/packs-toggle-buttons"
import { PacksToolbarSlider } from "@/modules/packs/components/packs-toolbar-slider/packs-toolbar-slider"
import React, { Dispatch, SetStateAction } from "react"
import { useAppSelector } from "@/app/hooks"
import { PacksClearFiltersButton } from "@/modules/packs/components/packs-clear-filters-button/packs-clear-filters-button"
import { PacksParams } from "@/modules/packs/types"

type PropsType = {
  params: PacksParams
  setParams: Dispatch<SetStateAction<PacksParams>>
  handleSetIsMyPack: (isMyPack: boolean) => void
  handleSearch: (value: string) => void
  handleSetTableSlider: (value: [number, number]) => void
}

export const PacksTableToolbar: React.FC<PropsType> = ({
  handleSetIsMyPack,
  params,
  setParams,
  handleSearch,
  handleSetTableSlider,
}) => {
  const isLoading = useAppSelector((state) => state.packs.isLoading)
  const onSearch = (value: string) => {
    handleSearch(value)
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
      <PacksToggleButtons onClick={handleSetIsMyPack} />
      <PacksToolbarSlider
        handleSetTableSlider={handleSetTableSlider}
        params={params}
        setParams={setParams}
      />
      <PacksClearFiltersButton params={params} setParams={setParams} />
    </StyledTableToolbarWrapper>
  )
}
