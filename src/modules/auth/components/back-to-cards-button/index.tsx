import React from "react"
import { StyledBackToCardLink } from "@/modules/auth/components/back-to-cards-button/styles"

export const BackToCardsButton = () => {
  return (
    <StyledBackToCardLink to={"/cards"}>Go to Packs List</StyledBackToCardLink>
  )
}
