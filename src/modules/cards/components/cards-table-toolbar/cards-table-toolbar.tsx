import Search from "antd/es/input/Search"
import { StyledTableToolbarWrapper } from "@/modules/cards/components/cards-table-toolbar/styles"
import { CardsToggleButtons } from "@/modules/cards/components/cards-toggle-buttons/cards-toggle-buttons"
import { CardsToolbarSlider } from "@/modules/cards/components/cards-toolbar-slider/cards-toolbar-slider"
import React from "react"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { cardsThunk } from "@/modules/cards/cards.slice"
import { ParamsPropsType } from "@/modules/cards"
import { CardsClearFiltersButton } from "@/modules/cards/components/cards-clear-filters-button/cards-clear-filters-button"

export const CardsTableToolbar: React.FC<ParamsPropsType> = ({
  params,
  setParams,
}) => {
  const isLoading = useAppSelector((state) => state.cards.isLoading)
  const dispatch = useAppDispatch()
  const onSearch = (value: string) => {
    dispatch(cardsThunk.setCards({ ...params, packName: value }))
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
      <CardsToggleButtons />
      <CardsToolbarSlider params={params} setParams={setParams} />
      <CardsClearFiltersButton />
    </StyledTableToolbarWrapper>
  )
}
