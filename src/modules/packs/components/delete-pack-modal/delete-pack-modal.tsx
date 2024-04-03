import React from "react"
import { useAppDispatch } from "@/app/hooks"
import { packsThunk, setModalType } from "@/modules/packs/packs.slice"
import { Button } from "antd"
import { StyledPacksModalButtonsWrapper } from "@/modules/packs/components/styles"

type PropsType = {
  pack_id: string
  pack_name: string
}

export const DeletePackModal: React.FC<PropsType> = ({
  pack_id,
  pack_name,
}) => {
  const dispatch = useAppDispatch()
  const onSubmit = () => {
    dispatch(packsThunk.deletePack({ id: pack_id }))
    dispatch(setModalType(null))
  }
  const handleCancel = () => {
    dispatch(setModalType(null))
  }
  return (
    <>
      <h3>Do you want to delete a pack by name {pack_name} ?</h3>
      <StyledPacksModalButtonsWrapper>
        <Button danger onClick={onSubmit}>
          Delete
        </Button>
        <Button onClick={handleCancel}>Cancel</Button>
      </StyledPacksModalButtonsWrapper>
    </>
  )
}
