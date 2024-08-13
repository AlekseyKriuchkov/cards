import React, { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { PacksModalType, PacksParams } from "@/modules/packs/types"
import { useSearchParams } from "react-router-dom"
import { packsThunk } from "@/modules/packs/packs.slice"
import { CardsModal } from "@/shared/modal"
import { DeletePackConfirmationDialog } from "@/shared/delete-pack-dialog/delete-pack-confirmation-dialog"
import { EditPackDialog } from "@/shared/edit-pack-dialog/edit-pack-dialog"
import { PacksTableToolbar } from "@/modules/packs/components/packs-table-toolbar/packs-table-toolbar"
import { PacksTable } from "@/modules/packs/components/packs-table/packs-table"
import { useAuth } from "@/modules/auth/hooks/useAuth"

export const PacksTableTemplate = () => {
  const dispatch = useAppDispatch()

  const { user } = useAuth()

  const data = useAppSelector((state) => state.packs.cards)

  const [modalType, setModalType] = useState<PacksModalType>(null)

  const [params, setParams] = useState<PacksParams>({
    packName: "",
    page: 1,
    pageCount: 10,
    min: data?.minCardsCount,
    max: data?.maxCardsCount,
    sortPacks: "",
  })

  const [isParamsChecked, setIsParamsChecked] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams()

  const currentParams = Object.fromEntries(searchParams)

  const onChangeSearchParams = (paramName: string, paramValue: string) => {
    if (paramName === "sort" && !paramValue) {
      delete currentParams["sort"]
    }
    setSearchParams({ ...currentParams, [paramName]: paramValue })
  }

  const checkUrlParams = () => {
    const URLParams: Record<string, string | number> = {}
    for (let [key, value] of searchParams.entries()) {
      if (key === "packs" && value === "my") {
        URLParams["user_id"] = user?._id || ""
        continue
      }

      if (!isNaN(+value) && +value !== 0) {
        URLParams[key] = Number(value)
        continue
      }

      if (isNaN(+value) || value === "") {
        URLParams[key] = value
      }
    }

    return URLParams as Partial<PacksParams>
  }

  useEffect(() => {
    if (!user?._id) {
      return
    }
    const newParams = checkUrlParams()
    setParams({
      ...params,
      ...newParams,
    })

    setIsParamsChecked(true)
  }, [user?._id])

  useEffect(() => {
    if (!isParamsChecked) {
      return
    }
    dispatch(
      packsThunk.setPacks({
        ...params,
      }),
    )
  }, [isParamsChecked, user?._id])

  const editPack = (values: { name: string; private: boolean }) => {
    dispatch(
      packsThunk.updateCardsPack({
        params: { ...params },
        cardsPack: {
          name: values.name,
          private: values.private,
          _id: modalType?.packId || "",
        },
      }),
    )
    setModalType(null)
  }

  const deletePack = (packId: string) => {
    dispatch(packsThunk.deletePack({ id: packId }))
    setModalType(null)
  }

  const handleSetIsMyPack = (isMyPack: boolean) => {
    const packParamValue = isMyPack ? "my" : "all"
    const userId = user?._id
    const newParams = {
      ...params,
      user_id: isMyPack ? userId : undefined,
    }

    onChangeSearchParams("packs", packParamValue)
    setParams(newParams)
    dispatch(packsThunk.setPacks(newParams))
  }

  const handleSearch = (value: string) => {
    const newParams = {
      ...params,
      packName: value,
    }

    onChangeSearchParams("packName", value)
    setParams(newParams)
    dispatch(packsThunk.setPacks(newParams))
  }

  const handleSetPaginationTable = (page: number, pageCount: number) => {
    const newParams = {
      ...params,
      page: page,
      pageCount: pageCount,
    }
    if (params.page !== page) {
      onChangeSearchParams("page", page.toString())
    }
    if (params.pageCount !== pageCount) {
      onChangeSearchParams("pageCount", pageCount.toString())
    }
    setParams(newParams)
    dispatch(packsThunk.setPacks(newParams))
  }

  const handleSetSortTable = (order: string, field: string) => {
    const sortRequest: string | undefined =
      (order === "ascend" && `1${field}`) ||
      (order === "descend" && `0${field}`) ||
      undefined
    const newParams = {
      ...params,
      sortPacks: sortRequest,
    }
    dispatch(packsThunk.setPacks(newParams))
    setParams(newParams)

    const urlSortValue =
      order === "ascend" ? "Up" : order === "descend" ? "Down" : ""
    onChangeSearchParams("sort", urlSortValue)
  }

  const handleSetTableSlider = (value: [number, number]) => {
    const newParams = {
      ...params,
      min: value[0],
      max: value[1],
    }
    if (params.min !== value[0] || params.min === 0) {
      onChangeSearchParams("min", value[0].toString())
    }
    if (params.max !== value[1]) {
      onChangeSearchParams("max", value[1].toString())
    }
    setParams(newParams)
    dispatch(packsThunk.setPacks(newParams))
  }

  return (
    <>
      {modalType?.actionType === "delete" && (
        <CardsModal title={"Delete pack"} onClose={() => setModalType(null)}>
          <DeletePackConfirmationDialog
            packName={modalType.packName ? modalType.packName : ""}
            onSubmit={() =>
              deletePack(modalType.packId ? modalType.packId : "")
            }
            onCancel={() => setModalType(null)}
          />
        </CardsModal>
      )}
      {modalType?.actionType === "edit" && (
        <CardsModal title={"Edit pack"} onClose={() => setModalType(null)}>
          <EditPackDialog
            modalType={modalType}
            onCancel={() => setModalType(null)}
            onSubmit={(values) => editPack(values)}
          />
        </CardsModal>
      )}
      <PacksTableToolbar
        handleSetIsMyPack={handleSetIsMyPack}
        handleSearch={handleSearch}
        handleSetTableSlider={handleSetTableSlider}
        params={params}
        setParams={setParams}
      />
      <PacksTable
        handleSetPaginationTable={handleSetPaginationTable}
        handleSetSortTable={handleSetSortTable}
        onActionClick={setModalType}
      />
    </>
  )
}
