import React from "react"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { authThunk } from "@/modules/auth/auth.slice"
import { StyledCard } from "@/modules/auth/pages/sign-in/styles"
import { Button, Form, Input, Skeleton } from "antd"
import { StyledNavLink } from "@/modules/auth/styles"
import { StyledP, StyledText } from "@/modules/auth/pages/styles"
import { forgotPasswordTemplateMessage } from "@/modules/auth/pages/forgot-password/forgot-password-template-message"
import { useNavigate } from "react-router-dom"

export const ForgotPassword = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const isLoading = useAppSelector((state) => state.auth.isLoading)

  const sendMessageHandler = (values: { email: string }) => {
    dispatch(
      authThunk.forgot({
        email: values.email,
        message: forgotPasswordTemplateMessage,
      }),
    )
      .unwrap()
      .then(() => {
        navigate("/check-email")
      })
  }

  return (
    <StyledCard title="Forgot your password?">
      {isLoading ? (
        <Skeleton />
      ) : (
        <Form name="basic" onFinish={sendMessageHandler} autoComplete="off">
          <Form.Item name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <StyledText>
            Enter your email address and we will send you further instructions
          </StyledText>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              Send
            </Button>
          </Form.Item>
          <StyledP>Did you remember your password?</StyledP>
          <StyledNavLink to="/sign-in">Sign In</StyledNavLink>
        </Form>
      )}
    </StyledCard>
  )
}
