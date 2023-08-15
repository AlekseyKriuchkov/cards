import Search from "antd/es/input/Search"
import { StyledTableToolbarWrapper } from "@/modules/cards/components/cards-table-toolbar/styles"
import { CardsToggleButtons } from "@/modules/cards/components/cards-toggle-buttons/cards-toggle-buttons"
import { CardsToolbarSlider } from "@/modules/cards/components/cards-toolbar-slider/cards-toolbar-slider"

export const CardsTableToolbar = () => {
  const onSearch = (values: string) => {
    console.log(values)
  }

  return (
    <StyledTableToolbarWrapper>
      <Search
        allowClear
        placeholder="input search"
        onSearch={onSearch}
        style={{ width: 200 }}
      />
      <CardsToggleButtons />
      <CardsToolbarSlider />
    </StyledTableToolbarWrapper>
  )
}
