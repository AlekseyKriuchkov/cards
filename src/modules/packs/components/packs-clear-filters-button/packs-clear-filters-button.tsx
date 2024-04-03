import React from "react"
import { Button } from "antd"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { packsThunk } from "@/modules/packs/packs.slice"
import { ParamsPropsType } from "@/modules/packs"

export const PacksClearFiltersButton: React.FC<ParamsPropsType> = ({
  params,
  setParams,
}) => {
  const data = useAppSelector((state) => state.packs.cards)
  const isLoading = useAppSelector((state) => state.packs.isLoading)
  const dispatch = useAppDispatch()
  const clearFilters = () => {
    dispatch(
      packsThunk.setPacks({
        ...params,
        packName: "",
        page: 1,
        pageCount: 10,
        min: data?.minCardsCount,
        max: data?.maxCardsCount,
        user_id: "",
        sortPacks: "",
      }),
    )
    setParams({
      ...params,
      packName: "",
      page: 1,
      pageCount: 10,
      min: data?.minCardsCount,
      max: data?.maxCardsCount,
      user_id: "",
      sortPacks: "",
    })
  }
  return (
    <Button disabled={isLoading} type={"text"} onClick={clearFilters}>
      Clear filters
    </Button>
  )
}
