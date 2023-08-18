import React, { useEffect, useState } from "react"
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
  console.log(maxCount)
  console.log(params)
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

  // if (maxCount === null || maxCount === undefined) {
  //   return <>Loading</>
  // }

  return (
    <div style={{ width: 150 }}>
      <Slider
        disabled={isLoading}
        range
        defaultValue={[minCount, maxCount]}
        value={[minCount, maxCount]}
        min={data?.minCardsCount}
        max={data?.maxCardsCount}
        onAfterChange={onAfterChange}
      />
    </div>
  )
}
