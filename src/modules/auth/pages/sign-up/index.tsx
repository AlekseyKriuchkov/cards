import React from "react"
import { useAppDispatch } from "@/app/hooks"
import { LoginType } from "@/modules/auth/api/types"
import { authThunk } from "@/modules/auth/auth.slice"
import { StyledCard } from "@/modules/auth/pages/sign-in/styles"
import { Button, Form, Input } from "antd"
import { StyledNavLink } from "@/modules/auth/styles"

export const SignUp = () => {
  const dispatch = useAppDispatch()

  const onFinish = async (values: LoginType) => {
    dispatch(authThunk.register(values))
  }
  return (
    <StyledCard title={"Sign Up"}>
      <Form name="basic" onFinish={onFinish} autoComplete="off">
        <Form.Item name="email">
          <Input placeholder={"Email"} />
        </Form.Item>

        <Form.Item name="password">
          <Input.Password placeholder={"Password"} />
        </Form.Item>
        <Form.Item name="confirm password">
          <Input.Password placeholder={"Confirm password"} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size={"large"} block={true}>
            Sign Up
          </Button>
        </Form.Item>

        <StyledNavLink to={"/sign-in"}>Sign In</StyledNavLink>
      </Form>
    </StyledCard>
  )
}
