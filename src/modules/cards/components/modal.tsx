import React, { ReactNode } from "react"
import { Modal } from "antd"

type PropsType = {
  callback: () => void
  showModal: boolean
  title: string
  children: ReactNode
}

export const CardsModal: React.FC<PropsType> = ({
  callback,
  showModal,
  title,
  children,
}) => {
  const handleCancel = () => {
    callback()
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
