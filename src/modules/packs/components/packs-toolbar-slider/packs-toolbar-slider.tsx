import React, { useEffect, useState } from "react"
import { Slider } from "antd"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { packsThunk } from "@/modules/packs/packs.slice"
import { ParamsPropsType } from "@/modules/packs"

export const PacksToolbarSlider: React.FC<ParamsPropsType> = ({
  params,
  setParams,
}) => {
  const data = useAppSelector((state) => state.packs.cards)
  const isLoading = useAppSelector((state) => state.packs.isLoading)
  const dispatch = useAppDispatch()

  const minCount = params.min ? params.min : 0
  const maxCount = params.max ? params.max : 100

  const [value, setValue] = useState([minCount, maxCount])

  useEffect(() => {
    setValue([params.min || 0, params.max || 100])
  }, [params.max, params.min])

  const onChangeValue = (value: [number, number]) => {
    setValue(value)
  }

  const onAfterChange = (value: [number, number]) => {
    dispatch(
      packsThunk.setPacks({
        ...params,
        min: value[0],
        max: value[1],
      }),
    )
    setParams({ ...params, min: value[0], max: value[1] })
  }

  return (
    <div style={{ width: 150 }}>
      <Slider
        disabled={isLoading}
        range
        value={[value[0], value[1]]}
        min={data?.minCardsCount}
        max={data?.maxCardsCount}
        onAfterChange={onAfterChange}
        onChange={onChangeValue}
      />
    </div>
  )
}
