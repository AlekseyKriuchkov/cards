import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { packsThunk } from "@/modules/packs/packs.slice"
import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import { PacksTable } from "@/modules/packs/components/packs-table/packs-table"
import { PacksTableHeader } from "@/modules/packs/components/packs-table-header/packs-table-header"
import { PacksTableToolbar } from "@/modules/packs/components/packs-table-toolbar/packs-table-toolbar"
import { GetCardsPackType } from "@/modules/packs/api/types"

export type ParamsPropsType = {
  params: GetCardsPackType
  setParams: Dispatch<SetStateAction<GetCardsPackType>>
}

export const Cards = () => {
  const dispatch = useAppDispatch()

  const data = useAppSelector((state) => state.packs.cards)

  const [params, setParams] = useState<GetCardsPackType>({
    packName: "",
    page: 1,
    pageCount: 10,
    min: data?.minCardsCount,
    max: data?.maxCardsCount,
    user_id: "",
    sortPacks: "",
  })
  useEffect(() => {
    dispatch(
      packsThunk.setPacks({
        ...params,
      }),
    )
  }, [])
  useEffect(() => {
    setParams({ ...params, min: data?.minCardsCount, max: data?.maxCardsCount })
  }, [data?.minCardsCount, data?.maxCardsCount])

  return (
    <>
      <PacksTableHeader />
      <PacksTableToolbar params={params} setParams={setParams} />
      <PacksTable params={params} setParams={setParams} />
    </>
  )
}
