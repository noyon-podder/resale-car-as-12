import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import ErrorPage from "../../Pages/shared/ErrorPage/ErrorPage";
import Login from "../../Pages/UserAccount/Login/Login";
import SignUp from "../../Pages/UserAccount/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: '/signin',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <SignUp/>
  }
]);
