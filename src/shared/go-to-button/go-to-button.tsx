import React from "react"
import { StyledBackToCardLink } from "@/shared/go-to-button/styles"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/modules/auth/hooks/useAuth"

type PropsType = {
  text: string
}

export const GoToButton = (props: PropsType) => {
  const { isLoading } = useAuth()
  const navigate = useNavigate()
  return (
    <StyledBackToCardLink
      disabled={isLoading}
      type={"text"}
      onClick={() => {
        navigate("/packs")
      }}
    >
      {props.text}
    </StyledBackToCardLink>
  )
}
