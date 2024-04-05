import React, { ReactNode } from "react"
import { Modal } from "antd"

type PropsType = {
  title: string
  children: ReactNode
  onClose: () => void
}

export const CardsModal: React.FC<PropsType> = ({
  title,
  children,
  onClose,
}) => {
  const handleCancel = () => {
    onClose()
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
