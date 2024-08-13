import React from "react"
import { Button, Form, Input } from "antd"
import { StyledPacksModalButtonsWrapper } from "@/modules/packs/components/styles"
import { Text } from "@/modules/auth/pages/profile/style"

type PropsType = {
  onSubmit: (values: { question: string; answer: string }) => void
  onCancel: () => void
}

export const AddNewCardDialog: React.FC<PropsType> = ({
  onSubmit,
  onCancel,
}) => {
  return (
    <>
      <Form onFinish={onSubmit}>
        <Text>Question:</Text>
        <Form.Item name="question">
          <Input placeholder={"Enter new question"} />
        </Form.Item>
        <Text>Answer:</Text>
        <Form.Item name="answer">
          <Input placeholder={"Enter answer"} />
        </Form.Item>
        <StyledPacksModalButtonsWrapper>
          <Form.Item>
            <Button type={"primary"} htmlType="submit">
              Add New Card
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
