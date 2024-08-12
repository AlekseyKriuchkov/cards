import React, { useEffect } from "react"

import { PacksTableTemplate } from "@/modules/packs/components/packs-table-template/packs-table-template"
import { PacksTableHeader } from "@/modules/packs/components/packs-table-header/packs-table-header"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "@/app/hooks"

export const PacksPage = () => {
  const isAuthorized = useAppSelector((state) => !!state.auth.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthorized) {
      navigate("/sign-in")
    }
  }, [isAuthorized, navigate])

  return (
    <>
      <PacksTableHeader />
      <PacksTableTemplate />
    </>
  )
}
