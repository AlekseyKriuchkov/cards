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
import { CardsPage } from "@/modules/cards/components/cards-page/cards-page"
import { PacksPage } from "@/modules/packs"
import { LearnPage } from "@/modules/cards/components/learn-page/learn-page"

export const route = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Profile />,
    },
    {
      path: "/packs",
      element: <PacksPage />,
    },
    {
      path: "packs/pack/:id",
      element: <CardsPage />,
    },
    {
      path: "learn/:id",
      element: <LearnPage />,
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
