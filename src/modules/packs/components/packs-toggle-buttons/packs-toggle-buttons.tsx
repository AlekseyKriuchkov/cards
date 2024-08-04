import React, { useState } from "react"
import { Button, Space } from "antd"
import { useAppSelector } from "@/app/hooks"

type PropsType = {
  onClick: (isMyPack: boolean) => void
}

export const PacksToggleButtons: React.FC<PropsType> = ({ onClick }) => {
  const [isMyPack, setIsMyPack] = useState(false)
  const isLoading = useAppSelector((state) => state.packs.isLoading)
  const handleSetIsMyPack = (value: boolean) => {
    setIsMyPack(value)
    onClick(value)
  }

  return (
    <Space.Compact>
      <Button
        disabled={isLoading}
        type={isMyPack ? "primary" : "default"}
        onClick={() => handleSetIsMyPack(true)}
      >
        My
      </Button>
      <Button
        disabled={isLoading}
        type={isMyPack ? "default" : "primary"}
        onClick={() => handleSetIsMyPack(false)}
      >
        All
      </Button>
    </Space.Compact>
  )
}
