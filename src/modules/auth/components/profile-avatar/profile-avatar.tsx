import React from "react"
import { Avatar, Upload } from "antd"
import { useAuth } from "@/modules/auth/hooks/useAuth"
import {
  StyledAvatarGroup,
  StyledCloseCircleTwoTone,
  StyledSkeletonProfileAvatar,
  StyledUserOutlined,
} from "@/modules/auth/pages/profile/style"
import { UploadRequestOption } from "rc-upload/lib/interface"
import { RcFile } from "antd/es/upload"
import { useAppDispatch } from "@/app/hooks"
import { authThunk } from "@/modules/auth/auth.slice"
import { UserOutlined } from "@ant-design/icons"

export const ProfileAvatar = () => {
  const { user, isLoading } = useAuth()
  const dispatch = useAppDispatch()

  const convertBase64 = (img: Blob, callback: (url: string) => void) => {
    const reader = new FileReader()

    reader.addEventListener("load", () => callback(reader.result as string))
    reader.readAsDataURL(img)
  }

  const handleUploadAvatar = (action: UploadRequestOption) => {
    const img = action.file as RcFile
    convertBase64(img, (url) => {
      dispatch(
        authThunk.authMeUpdate({
          avatar: url,
        }),
      )
    })
  }
  const handleDeleteAvatar = () => {
    dispatch(
      authThunk.authMeUpdate({
        avatar: " ",
      }),
    )
  }

  if (isLoading) {
    return <StyledSkeletonProfileAvatar />
  }

  return (
    <StyledAvatarGroup>
      <Upload showUploadList={false} customRequest={handleUploadAvatar}>
        {user?.avatar ? (
          <Avatar size={96} src={user?.avatar} icon={<UserOutlined />} />
        ) : (
          <StyledUserOutlined />
        )}
      </Upload>
      <StyledCloseCircleTwoTone onClick={handleDeleteAvatar} />
    </StyledAvatarGroup>
  )
}
