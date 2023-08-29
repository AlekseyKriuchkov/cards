import React from "react"
import { Button, Form, Input } from "antd"
import { useAppDispatch } from "@/app/hooks"
import { cardsThunk } from "@/modules/cards/cards.slice"

type PropsType = {
  callback: () => void
}

export const AddNewPackModal: React.FC<PropsType> = ({ callback }) => {
  const dispatch = useAppDispatch()
  const onFinish = async (values: { value: string }) => {
    dispatch(cardsThunk.newPack({ cardsPack: { name: values.value } }))
    callback()
  }
  const handleCancel = () => {
    callback()
  }
  return (
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
  )
}
