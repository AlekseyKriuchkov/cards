import React from "react"
import { StyledCard } from "@/modules/auth/pages/sign-in/styles"
import { Button, Form } from "antd"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "@/app/hooks"

export const CheckEmail = () => {
  const navigate = useNavigate()
  const isSuccess = useAppSelector((state) => state.auth.isSuccess)
  return (
    <StyledCard title={"Check Email"}>
      <Form.Item>
        <Button
          onClick={() => {
            navigate("/sign-in")
          }}
          type="primary"
          size={"large"}
          block={true}
        >
          Sign In
        </Button>
      </Form.Item>
    </StyledCard>
  )
}
