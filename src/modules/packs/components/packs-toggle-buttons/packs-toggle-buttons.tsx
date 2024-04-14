import React, { useState } from "react"
import { Button, Space } from "antd"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { packsThunk } from "@/modules/packs/packs.slice"
import { useAuth } from "@/modules/auth/hooks/useAuth"
import { ParamsPropsType } from "@/modules/packs"

export const PacksToggleButtons: React.FC<ParamsPropsType> = ({
  setParams,
  params,
}) => {
  const dispatch = useAppDispatch()
  const { user } = useAuth()
  const [toggleAll, setToggleAll] = useState(true)
  const data = useAppSelector((state) => state.packs)
  const isLoading = useAppSelector((state) => state.packs.isLoading)
  const setAll = () => {
    setToggleAll(true)
    setParams({ ...params, user_id: undefined })
    dispatch(
      packsThunk.setPacks({
        page: data.cards?.page,
        pageCount: data.cards?.pageCount,
      }),
    )
  }
  const setMy = () => {
    setToggleAll(false)
    setParams({ ...params, user_id: user?._id })
    dispatch(
      packsThunk.setPacks({
        page: data.cards?.page,
        pageCount: data.cards?.pageCount,
        user_id: user?._id,
      }),
    )
  }
  return (
    <Space.Compact>
      <Button
        disabled={isLoading}
        type={toggleAll ? "default" : "primary"}
        onClick={setMy}
      >
        My
      </Button>
      <Button
        disabled={isLoading}
        type={toggleAll ? "primary" : "default"}
        onClick={setAll}
      >
        All
      </Button>
    </Space.Compact>
  )
}
