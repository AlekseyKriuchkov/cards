import React from "react"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { LoginType } from "@/modules/auth/api/types"
import { authThunk } from "@/modules/auth/auth.slice"
import { StyledCard } from "@/modules/auth/pages/sign-in/styles"
import { Button, Form, Input, Spin } from "antd"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/modules/auth/hooks/useAuth"
import { StyledNavLink } from "@/modules/auth/styles"

export const SignUp = () => {
  const { isLoading } = useAuth()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const isSuccess = useAppSelector((state) => state.auth.isRegisterSuccess)

  if (isSuccess) {
    navigate("/sign-in")
  }

  const onRegisterHandler = (values: LoginType) => {
    dispatch(authThunk.register(values))
  }

  if (isLoading) {
    return <Spin />
  }

  return (
    <StyledCard title="Sign Up">
      <Form name="basic" onFinish={onRegisterHandler} autoComplete="off">
        <Form.Item name="email">
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item name="password">
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item name="confirm password">
          <Input.Password placeholder="Confirm password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" block>
            Sign Up
          </Button>
        </Form.Item>

        <StyledNavLink to="/sign-in">Sign In</StyledNavLink>
      </Form>
    </StyledCard>
  )
}
