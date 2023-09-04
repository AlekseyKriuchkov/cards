import React from "react"
import { Button, Checkbox, Form, Input } from "antd"
import { useAppDispatch } from "@/app/hooks"
import { cardsThunk, setModalType } from "@/modules/cards/cards.slice"
import { StyledPacksModalButtonsWrapper } from "@/modules/cards/components/styles"

export const AddNewPackModal = () => {
  const dispatch = useAppDispatch()
  const onFinish = async (values: { value: string }) => {
    dispatch(
      cardsThunk.newPack({
        cardsPack: { name: values.value, private: !!values.value },
      }),
    )
    dispatch(setModalType(null))
  }
  const handleCancel = () => {
    dispatch(setModalType(null))
  }
  return (
    <Form onFinish={onFinish}>
      <Form.Item name="value">
        <Input placeholder={"Enter pack name"} />
      </Form.Item>
      <Form.Item name="private" valuePropName="checked">
        <Checkbox>Private</Checkbox>
      </Form.Item>
      <StyledPacksModalButtonsWrapper>
        <Form.Item>
          <Button type={"primary"} htmlType="submit">
            Add pack
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type={"default"} onClick={handleCancel}>
            Cancel
          </Button>
        </Form.Item>
      </StyledPacksModalButtonsWrapper>
    </Form>
  )
}
