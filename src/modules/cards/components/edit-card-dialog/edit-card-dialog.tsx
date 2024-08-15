import React from "react"
import { Button, Form, Input } from "antd"
import { StyledPacksModalButtonsWrapper } from "@/modules/packs/components/styles"
import { CardsModalType } from "@/modules/cards/types"
import { Text } from "@/modules/auth/pages/profile/style"

type PropsType = {
  onSubmit: (values: { question: string; answer: string }) => void
  onCancel: () => void
  cardModalType: CardsModalType
}

export const EditCardDialog: React.FC<PropsType> = ({
  cardModalType,
  onSubmit,
  onCancel,
}) => {
  return (
    <>
      <Form
        onFinish={onSubmit}
        initialValues={{
          question: cardModalType?.question,
          answer: cardModalType?.answer,
        }}
      >
        <Text>Question:</Text>
        <Form.Item name="question">
          <Input placeholder={"Enter your question"} />
        </Form.Item>
        <Text>Answer:</Text>
        <Form.Item name="answer">
          <Input placeholder={"Enter your answer"} />
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
