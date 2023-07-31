import { BrowserRouter, RouterProvider } from "react-router-dom"
import { route } from "@/routes"
import { Header } from "@/modules/header"
import { GlobalStyle } from "@/global-style"
import { ContentWrapper } from "@/modules/auth/pages/styles"
import { useAppDispatch } from "@/app/hooks"
import { authThunk } from "@/modules/auth/auth.slice"

const router = route()
export const App = () => {
  const dispatch = useAppDispatch()
  dispatch(authThunk.authMe())
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <ContentWrapper>
        <RouterProvider router={router} />
      </ContentWrapper>
    </>
  )
}
