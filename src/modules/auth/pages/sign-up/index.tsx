import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/app/hooks"
import { LoginType } from "@/modules/auth/api/types"
import { authThunk, setIsSuccess } from "@/modules/auth/auth.slice"
import { StyledCard } from "@/modules/auth/pages/sign-in/styles"
import { Button, Form, Input } from "antd"
import { StyledNavLink } from "@/modules/auth/styles"
import { useNavigate } from "react-router-dom"

export const SignUp = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const isSuccess = useAppSelector((state) => state.auth.isSuccess)
  useEffect(() => {
    if (isSuccess) {
      navigate("/sign-in")
      dispatch(setIsSuccess(false))
    }
  }, [isSuccess])

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
