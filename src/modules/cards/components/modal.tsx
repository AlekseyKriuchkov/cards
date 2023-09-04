import React, { ReactNode } from "react"
import { Modal } from "antd"
import { useAppDispatch } from "@/app/hooks"
import { setModalType } from "@/modules/cards/cards.slice"

type PropsType = {
  title: string
  children: ReactNode
}

export const CardsModal: React.FC<PropsType> = ({ title, children }) => {
  const dispatch = useAppDispatch()
  const handleCancel = () => {
    dispatch(setModalType(null))
  }
  return (
    <Modal
      centered
      footer={null}
      title={title}
      open={true}
      onCancel={handleCancel}
    >
      {children}
    </Modal>
  )
}
