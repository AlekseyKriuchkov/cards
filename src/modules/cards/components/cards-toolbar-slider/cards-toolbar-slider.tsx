import React from "react"
import { Slider } from "antd"
import { useAppSelector } from "@/app/hooks"

export const CardsToolbarSlider = () => {
  const data = useAppSelector((state) => state.cards.cards)

  const minCount = data?.minCardsCount ? data.minCardsCount : 0
  const maxCount = data?.maxCardsCount ? data.maxCardsCount : 100

  const onAfterChange = (value: [number, number]) => {
    console.log("onAfterChange: ", value)
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
