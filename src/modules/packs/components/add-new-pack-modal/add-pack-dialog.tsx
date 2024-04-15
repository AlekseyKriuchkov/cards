import React from "react"
import { Button, Checkbox, Form, Input } from "antd"
import { StyledPacksModalButtonsWrapper } from "@/modules/packs/components/styles"

type PropsType = {
  onCancel: () => void
  onSubmit: (values: { value: string; private: boolean }) => void
}

export const AddPackDialog: React.FC<PropsType> = ({ onCancel, onSubmit }) => {
  return (
    <Form
      onFinish={onSubmit}
      initialValues={{
        private: false,
      }}
    >
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
          <Button type={"default"} onClick={onCancel}>
            Cancel
          </Button>
        </Form.Item>
      </StyledPacksModalButtonsWrapper>
    </Form>
  )
}
