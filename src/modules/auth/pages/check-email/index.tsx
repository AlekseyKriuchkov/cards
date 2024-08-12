import React, { useEffect } from "react"
import { StyledCard } from "@/modules/auth/pages/sign-in/styles"
import { Button, Form } from "antd"
import { useNavigate } from "react-router-dom"
import { StyledCheckEmailImage } from "@/modules/auth/pages/check-email/styles"
import { StyledText } from "@/modules/auth/pages/styles"
import { useAppDispatch } from "@/app/hooks"

export const CheckEmail = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate("/sign-in")
    }, 5000)
    return () => clearTimeout(timerId)
  }, [dispatch, navigate])

  return (
    <StyledCard title={"Check Email"}>
      <StyledCheckEmailImage
        src={"src/assets/check-email-image.svg"}
        alt="image"
      />
      <StyledText>We’ve sent an Email with instructions to</StyledText>
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
