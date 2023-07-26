import React, { useEffect } from "react"
import { StyledCard } from "@/modules/auth/pages/sign-in/styles"
import { Button, Form } from "antd"
import { useNavigate } from "react-router-dom"
import { StyledCheckEmailImage } from "@/modules/auth/pages/check-email/styles"
import checkEmailImage from "@/assets/check-email-image.svg"
import { StyledText } from "@/modules/auth/pages/styles"
import { useAppDispatch } from "@/app/hooks"
import { setIsSuccess } from "@/modules/auth/auth.slice"
export const CheckEmail = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setIsSuccess(false))
      navigate("/sign-in")
    }, 5000)
    return clearTimeout(timer)
  }, [])

  return (
    <StyledCard title={"Check Email"}>
      <StyledCheckEmailImage src={checkEmailImage} alt="image" />
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
