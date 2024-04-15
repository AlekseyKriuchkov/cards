import React from "react"
import { Button, Checkbox, Form, Input } from "antd"
import { useAppDispatch } from "@/app/hooks"
import { StyledPacksModalButtonsWrapper } from "@/modules/packs/components/styles"
import { PacksModalType } from "@/modules/packs/api/types"
import { packsThunk } from "@/modules/packs/packs.slice"

type PropsType = {
  onCancel: () => void
  setModalType: (modalData: PacksModalType) => void
}

export const AddPackDialog: React.FC<PropsType> = ({
  onCancel,
  setModalType,
}) => {
  const dispatch = useAppDispatch()
  const onFinish = (values: { value: string; private: boolean }) => {
    console.log(values)
    dispatch(
      packsThunk.newPack({
        cardsPack: { name: values.value, private: values.private },
      }),
    )
    setModalType(null)
  }
  return (
    <Form
      onFinish={onFinish}
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
