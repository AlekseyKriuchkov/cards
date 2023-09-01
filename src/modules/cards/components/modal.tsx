import React, { ReactNode } from "react"
import { Modal } from "antd"
import { useAppDispatch } from "@/app/hooks"
import { setModalType } from "@/modules/cards/cards.slice"

type PropsType = {
  showModal: boolean
  title: string
  children: ReactNode
}

export const CardsModal: React.FC<PropsType> = ({
  showModal,
  title,
  children,
}) => {
  const dispatch = useAppDispatch()
  const handleCancel = () => {
    dispatch(setModalType(null))
  }
  return (
    <Modal
      centered
      footer={null}
      title={title}
      open={showModal}
      onCancel={handleCancel}
    >
      {children}
    </Modal>
  )
}
