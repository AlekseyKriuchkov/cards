import { createBrowserRouter } from "react-router-dom"
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
import { Cards } from "@/modules/cards"

export const route = () => {
  return createBrowserRouter([
    {
      path: "/cards",
      element: <Cards />,
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
      path: "/set-new-password/:token",
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
}
