import React from "react"
import { Button, Checkbox, Form, Input } from "antd"
import { StyledPacksModalButtonsWrapper } from "@/modules/packs/components/styles"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { packsThunk, setModalType } from "@/modules/packs/packs.slice"

export const EditPackModal = () => {
  const modalType = useAppSelector((state) => state.packs.modalType)
  const dispatch = useAppDispatch()
  const onFinish = async (values: { name: string; private: boolean }) => {
    if (modalType?.pack_id)
      dispatch(
        packsThunk.updateCardsPack({
          cardsPack: { ...values, _id: modalType.pack_id },
        }),
      )
    dispatch(setModalType(null))
  }
  const handleCancel = () => {
    dispatch(setModalType(null))
  }
  return (
    <>
      <Form onFinish={onFinish}>
        <Form.Item name="name">
          <Input
            placeholder={"Enter pack name"}
            defaultValue={modalType?.pack_name}
          />
        </Form.Item>
        <Form.Item name="private" valuePropName="checked">
          <Checkbox defaultChecked={modalType?.private}>Private</Checkbox>
        </Form.Item>
        <StyledPacksModalButtonsWrapper>
          <Form.Item>
            <Button type={"primary"} htmlType="submit">
              Edit
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type={"default"} onClick={handleCancel}>
              Cancel
            </Button>
          </Form.Item>
        </StyledPacksModalButtonsWrapper>
      </Form>
    </>
  )
}
