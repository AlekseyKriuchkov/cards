import "./App.css"
import { RouterProvider } from "react-router-dom"
import { route } from "@/routes"

const router = route()
export const App = () => {
  return <RouterProvider router={router} />
}
