import React from "react"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { setModalType } from "@/modules/cards/cards.slice"

type PropsType = {
  pack_id: string
  pack_name: string
}

export const DeletePackModal: React.FC<PropsType> = ({
  pack_id,
  pack_name,
}) => {
  const modalType = useAppSelector((state) => state.cards.modalType)
  const dispatch = useAppDispatch()
  const onSubmit = () => {}
  const handleCancel = () => {
    dispatch(setModalType(null))
  }
  return (
    <div>
      <h2>`Do you want to delete a pack by name ${pack_name}?`</h2>
    </div>
  )
}
