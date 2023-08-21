import React, { useState } from "react"
import { Slider } from "antd"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { cardsThunk } from "@/modules/cards/cards.slice"
import { ParamsPropsType } from "@/modules/cards"

export const CardsToolbarSlider: React.FC<ParamsPropsType> = ({
  params,
  setParams,
}) => {
  const data = useAppSelector((state) => state.cards.cards)
  const isLoading = useAppSelector((state) => state.cards.isLoading)
  const dispatch = useAppDispatch()

  const minCount = params.min ? params.min : 0
  const maxCount = params.max ? params.max : 100

  const [value, setValue] = useState([minCount, maxCount])

  const onChangeValue = (value: [number, number]) => {
    setValue(value)
  }

  const onAfterChange = (value: [number, number]) => {
    dispatch(
      cardsThunk.setCards({
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
        defaultValue={[minCount, maxCount]}
        min={data?.minCardsCount}
        max={data?.maxCardsCount}
        onAfterChange={onAfterChange}
        onChange={onChangeValue}
      />
    </div>
  )
}
