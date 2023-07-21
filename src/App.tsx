import "./App.css"
import { RouterProvider } from "react-router-dom"
import { route } from "@/routes"
import { Header } from "@/modules/header"

const router = route()
export const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  )
}
