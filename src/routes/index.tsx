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
import { Pack } from "@/modules/packs/components/learn-pack/pack"
import { Packs } from "@/modules/packs"

export const route = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Profile />,
    },
    {
      path: "/packs",
      element: <Packs />,
    },
    {
      path: "packs/pack/:id",
      element: <Pack />,
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
