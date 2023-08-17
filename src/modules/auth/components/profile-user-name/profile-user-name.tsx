import React, { useState } from "react"
import { StyledUserName } from "@/modules/auth/pages/profile/style"
import { useAuth } from "@/modules/auth/hooks/useAuth"
import { Button, Form, Input, Skeleton, Space } from "antd"
import { useAppDispatch } from "@/app/hooks"
import { authThunk } from "@/modules/auth/auth.slice"
import { AuthMeUpdate } from "@/modules/auth/api/types"

export const ProfileUserName = () => {
  const { user, isLoading } = useAuth()
  const [edit, setEdit] = useState(false)
  const dispatch = useAppDispatch()

  const handleEdit = () => setEdit(true)
  const handleCloseEdit = () => setEdit(false)
  const onFinish = (values: AuthMeUpdate) => {
    dispatch(authThunk.authMeUpdate(values))
    setEdit(false)
  }

  if (edit) {
    return (
      <Form onFinish={onFinish}>
        <Space.Compact>
          <Form.Item name={"name"} initialValue={user?.name || "User name"}>
            <Input />
          </Form.Item>
          <Button danger onClick={handleCloseEdit}>
            Cancel
          </Button>
          <Form.Item>
            <Button type="primary" ghost htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Space.Compact>
      </Form>
    )
  }
  if (isLoading) {
    return <Skeleton.Input active size={"small"} />
  }
  return <StyledUserName onClick={handleEdit}>{user?.name}</StyledUserName>
}
