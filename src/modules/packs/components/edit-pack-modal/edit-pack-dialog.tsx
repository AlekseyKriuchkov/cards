import React from "react"
import { Button, Checkbox, Form, Input } from "antd"
import { StyledPacksModalButtonsWrapper } from "@/modules/packs/components/styles"
import { PacksModalType } from "@/modules/packs/api/types"

type PropsType = {
  onSubmit: (values: { name: string; private: boolean }) => void
  onCancel: () => void
  modalType: PacksModalType
}

export const EditPackDialog: React.FC<PropsType> = ({
  modalType,
  onSubmit,
  onCancel,
}) => {
  return (
    <>
      <Form
        onFinish={onSubmit}
        initialValues={{
          private: modalType?.private,
          name: modalType?.packName,
        }}
      >
        <Form.Item name="name">
          <Input placeholder={"Enter pack name"} />
        </Form.Item>
        <Form.Item name="private" valuePropName="checked">
          <Checkbox>Private</Checkbox>
        </Form.Item>
        <StyledPacksModalButtonsWrapper>
          <Form.Item>
            <Button type={"primary"} htmlType="submit">
              Edit
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type={"default"} onClick={onCancel}>
              Cancel
            </Button>
          </Form.Item>
        </StyledPacksModalButtonsWrapper>
      </Form>
    </>
  )
}
