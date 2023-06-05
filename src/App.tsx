import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Counter } from "features/counter/Counter"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Counter />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
