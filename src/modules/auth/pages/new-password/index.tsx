import React from "react"
import { useParams } from "react-router-dom"

export const NewPassword = () => {
  const { token } = useParams()
  console.log(token)
  return <div>NewPassword</div>
}
