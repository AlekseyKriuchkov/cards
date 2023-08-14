import Search from "antd/es/input/Search"
import { StyledTableToolbarWrapper } from "@/modules/cards/components/cards-table-toolbar/styles"

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
    </StyledTableToolbarWrapper>
  )
}
