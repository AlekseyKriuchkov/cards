import React from "react"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { LoginType } from "@/modules/auth/api/types"
import { authThunk } from "@/modules/auth/auth.slice"
import { StyledCard } from "@/modules/auth/pages/sign-in/styles"
import { Button, Form, Input } from "antd"
import { StyledNavLink } from "@/modules/auth/styles"
import { StyledP, StyledText } from "@/modules/auth/pages/style"
import { CheckEmail } from "@/modules/auth/pages"

export const ForgotPassword = () => {
  const dispatch = useAppDispatch()
  const isSuccess = useAppSelector((state) => state.auth.isSuccess)
  const message = `<div style="background-color: lime; padding: 15px">
password recovery link: 
<a href='http://localhost:5174/#/set-new-password/$token$'>
link</a>
</div>`
  const onFinish = async (values: LoginType) => {
    dispatch(authThunk.forgot({ ...values, message }))
  }
  if (isSuccess) {
    return <CheckEmail />
  }
  return (
    <StyledCard title={"Forgot your password?"}>
      <Form name="basic" onFinish={onFinish} autoComplete="off">
        <Form.Item name="email">
          <Input placeholder={"Email"} />
        </Form.Item>
        <StyledText>
          Enter your email address and we will send you further instructions
        </StyledText>

        <Form.Item>
          <Button type="primary" htmlType="submit" size={"large"} block={true}>
            Send
          </Button>
        </Form.Item>
        <StyledP>Did you remember your password?</StyledP>
        <StyledNavLink to={"/sign-in"}>Sign Up</StyledNavLink>
      </Form>
    </StyledCard>
  )
}
