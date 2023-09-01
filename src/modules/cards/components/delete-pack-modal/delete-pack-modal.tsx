import React from "react"
import { useAppDispatch } from "@/app/hooks"
import { cardsThunk, setModalType } from "@/modules/cards/cards.slice"
import { Button } from "antd"

type PropsType = {
  pack_id: string
  pack_name: string
}

export const DeletePackModal: React.FC<PropsType> = ({
  pack_id,
  pack_name,
}) => {
  const dispatch = useAppDispatch()
  const onSubmit = () => {
    dispatch(cardsThunk.deletePack({ id: pack_id }))
    dispatch(setModalType(null))
  }
  const handleCancel = () => {
    dispatch(setModalType(null))
  }
  return (
    <div>
      <h3>Do you want to delete a pack by name {pack_name} ?</h3>
      <Button danger onClick={onSubmit}>
        Delete
      </Button>
      <Button onClick={handleCancel}>Cancel</Button>
    </div>
  )
}
