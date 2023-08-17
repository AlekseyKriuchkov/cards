import React from "react"
import { StyledBackToCardLink } from "@/modules/auth/components/back-to-cards-button/styles"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/modules/auth/hooks/useAuth"

export const BackToCardsButton = () => {
  const { isLoading } = useAuth()
  const navigate = useNavigate()
  return (
    <StyledBackToCardLink
      disabled={isLoading}
      type={"text"}
      onClick={() => {
        navigate("/cards")
      }}
    >
      Go to Packs List
    </StyledBackToCardLink>
  )
}
