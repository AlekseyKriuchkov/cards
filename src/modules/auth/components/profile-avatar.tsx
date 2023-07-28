import React from "react"
import { Avatar, Upload } from "antd"
import { useAuth } from "@/modules/auth/hooks/useAuth"
import {
  StyledAvatarGroup,
  StyledUserOutlined,
} from "@/modules/auth/pages/profile/style"

export const ProfileAvatar = () => {
  const { user } = useAuth()
  return (
    <StyledAvatarGroup>
      <Upload>
        {user?.avatar ? (
          <Avatar shape="square" size={96} src={user?.avatar} />
        ) : (
          <StyledUserOutlined />
        )}
      </Upload>
    </StyledAvatarGroup>
  )
}
