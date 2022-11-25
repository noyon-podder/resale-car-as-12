import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import CategoryProduct from "../../Pages/Home/Category/CategoryProduct/CategoryProduct";
import Home from "../../Pages/Home/Home/Home";
import ErrorPage from "../../Pages/shared/ErrorPage/ErrorPage";
import Login from "../../Pages/UserAccount/Login/Login";
import SignUp from "../../Pages/UserAccount/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
      {
        path: '/category/:categoryId',
        element: <PrivateRoute><CategoryProduct></CategoryProduct></PrivateRoute>,
        loader: async ({params}) => fetch(`http://localhost:5000/category/${params.categoryId}`)
      }
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
