import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Slider } from "antd"
import { useAppSelector } from "@/app/hooks"
import { PacksParams } from "@/modules/packs/types"

type PropsType = {
  params: PacksParams
  setParams: Dispatch<SetStateAction<PacksParams>>
  handleSetTableSlider: (value: [number, number]) => void
}

export const PacksToolbarSlider: React.FC<PropsType> = ({
  handleSetTableSlider,
}) => {
  const data = useAppSelector((state) => state.packs.cards)
  const isLoading = useAppSelector((state) => state.packs.isLoading)

  const [minMaxValues, setMinMaxValues] = useState([0, 100])
  const [value, setValue] = useState([minMaxValues[0], minMaxValues[1]])

  useEffect(() => {
    setValue([data.minCardsCount, data.maxCardsCount || 100])
  }, [data.minCardsCount, data.maxCardsCount])

  useEffect(() => {
    setMinMaxValues([data.minCardsCount, data.maxCardsCount])
  }, [data.minCardsCount, data.maxCardsCount])

  const onChangeValue = (value: [number, number]) => {
    setValue(value)
  }

  const onAfterChange = (value: [number, number]) => {
    handleSetTableSlider(value)
  }

  return (
    <div style={{ width: 150 }}>
      <Slider
        disabled={isLoading}
        range
        value={[value[0], value[1]]}
        min={minMaxValues[0]}
        max={minMaxValues[1]}
        onAfterChange={onAfterChange}
        onChange={onChangeValue}
      />
    </div>
  )
}
