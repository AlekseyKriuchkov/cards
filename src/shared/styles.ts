import Title from "antd/es/typography/Title"
import styled from "styled-components"

export const StyledTableHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

export const StyledTableTitle = styled(Title).attrs({
  level: 2,
})`
  text-align: center;
  margin: 0 15px;
  width: fit-content;
`
