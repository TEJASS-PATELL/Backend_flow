import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Error from "./components/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import Profile from "./pages/Profile";
import Premium from "./pages/AdvanceFeature";
import Free from "./pages/FreeFeature";
import TermsConditions from "./components/Term'sAndCondition";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/premium-feature",
          element: <Premium/>
        },
        {
          path: "/free-feature",
          element: <Free/>
        }
      ]
    },

     {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "forgot-password",
      element: <ForgotPassword />
    },
    {
    path: "profile",
    element: <Profile/>
    },
    {
      path: "terms-and-conditions",
      element: <TermsConditions/>
    }
  ])
  return(
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App;