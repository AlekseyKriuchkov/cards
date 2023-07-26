import { RouterProvider } from "react-router-dom"
import { route } from "@/routes"
import { Header } from "@/modules/header"
import { GlobalStyle } from "@/global-style"
import { ContentWrapper } from "@/modules/auth/pages/styles"

const router = route()
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ContentWrapper>
        <RouterProvider router={router} />
      </ContentWrapper>
    </>
  )
}
