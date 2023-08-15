import React from "react"
import { Slider } from "antd"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { cardsThunk } from "@/modules/cards/cards.slice"
import { ParamsPropsType } from "@/modules/cards"

export const CardsToolbarSlider: React.FC<ParamsPropsType> = ({
  params,
  setParams,
}) => {
  const data = useAppSelector((state) => state.cards.cards)
  const dispatch = useAppDispatch()

  const minCount = data?.minCardsCount ? data.minCardsCount : 0
  const maxCount = data?.maxCardsCount ? data.maxCardsCount : 100

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
        range={{ draggableTrack: true }}
        defaultValue={[minCount, maxCount]}
        min={minCount}
        max={maxCount}
        onAfterChange={onAfterChange}
      />
    </div>
  )
}
