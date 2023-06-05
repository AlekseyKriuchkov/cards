import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Counter } from "./features/counter/Counter"
import {
  CheckEmail,
  ForgotPassword,
  NewPassword,
  Profile,
  ResetPassword,
  SignIn,
  SignUp,
} from "@/modules/auth/pages"
import { ErrorPage } from "@/modules/auth/pages/error404"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Counter />,
  },
  {
    path: "/check-email",
    element: <CheckEmail />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/new-password",
    element: <NewPassword />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
