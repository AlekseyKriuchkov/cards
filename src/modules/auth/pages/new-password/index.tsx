import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { StyledCard } from "@/modules/auth/pages/sign-in/styles"
import { Button, Form, Input } from "antd"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { authThunk } from "@/modules/auth/auth.slice"
import { NewPasswordType } from "@/modules/auth/api/types"

export const NewPassword = () => {
  const { token } = useParams()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const isSuccess = useAppSelector((state) => state.auth.isSuccess)

  const setNewPassword = async (values: NewPasswordType) => {
    dispatch(authThunk.newPassword({ ...values, resetPasswordToken: token }))
  }
  if (isSuccess) {
    navigate("/sign-in")
  }

  return (
    <StyledCard title={"Create new password!"}>
      <Form onFinish={setNewPassword}>
        <Form.Item name="password">
          <Input.Password placeholder={"Password"} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" size={"large"} block={true}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </StyledCard>
  )
}
