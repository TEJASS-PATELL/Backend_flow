import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Error from "./components/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Error/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/login",
          element: <Login/>
        },
        {
          path: "/signup",
          element: <SignUp/>
        },
      ]
    }
  ])
  return(
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App;