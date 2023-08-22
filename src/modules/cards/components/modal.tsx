import React, { ReactNode } from "react"
import { Button, Form, Input, Modal } from "antd"
import { useAppDispatch } from "@/app/hooks"
import { cardsThunk } from "@/modules/cards/cards.slice"

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
  const dispatch = useAppDispatch()
  const onFinish = (value: string) => {
    dispatch(cardsThunk.newPack({ cardsPack: { name: value } }))
    console.log(value)
    callback()
  }

  const handleCancel = () => {
    callback()
  }
  return (
    <Modal footer={null} title={title} open={showModal} onCancel={handleCancel}>
      <Form onFinish={onFinish}>
        <Form.Item name="value">
          <Input placeholder={"Enter pack name"} />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
        <Form.Item>
          <Button onClick={handleCancel}>Cancel</Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}
