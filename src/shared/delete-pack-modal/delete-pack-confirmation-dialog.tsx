import React from "react"
import { Button } from "antd"
import { StyledPacksModalButtonsWrapper } from "@/modules/packs/components/styles"

type PropsType = {
  packName: string
  onSubmit: () => void
  onCancel: () => void
}

export const DeletePackConfirmationDialog: React.FC<PropsType> = ({
  packName,
  onSubmit,
  onCancel,
}) => {
  return (
    <>
      <h3>Do you want to delete a pack by name {packName} ?</h3>
      <StyledPacksModalButtonsWrapper>
        <Button danger onClick={onSubmit}>
          Delete
        </Button>
        <Button onClick={onCancel}>Cancel</Button>
      </StyledPacksModalButtonsWrapper>
    </>
  )
}
