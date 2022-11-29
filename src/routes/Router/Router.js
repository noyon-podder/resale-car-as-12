import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyer from "../../Pages/Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import MyOrder from "../../Pages/Dashboard/MyOrder/MyOrder/MyOrder";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import ReportProduct from "../../Pages/Dashboard/ReportProduct/ReportProduct";
import CategoryProduct from "../../Pages/Home/Category/CategoryProduct/CategoryProduct";
import Home from "../../Pages/Home/Home/Home";
import ErrorPage from "../../Pages/shared/ErrorPage/ErrorPage";
import Login from "../../Pages/UserAccount/Login/Login";
import SignUp from "../../Pages/UserAccount/SignUp/SignUp";
import AdminRoute from "../PrivateRoute/AdminRoute";
import BuyerRoute from "../PrivateRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../PrivateRoute/SellerRoute";

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
      },
      {
        path: '/blog',
        element: <Blog/>
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
  },


  {
    path: '/dashboard',
    errorElement: <ErrorPage/>,
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
 
      {
        path: '/dashboard/my-order',
        element: <BuyerRoute><MyOrder/></BuyerRoute>
      },
      {
        path: '/dashboard/add-product',
        element: <SellerRoute><AddProduct/></SellerRoute>
      },
      {
        path: '/dashboard/my-product',
        element: <SellerRoute><MyProduct/></SellerRoute>
      },
      {
        path: '/dashboard/payment/:bookingId',
        element: <Payment/>,
        loader : ({params}) => fetch(`http://localhost:5000/bookings/${params.bookingId}`)
      },
      {
        path: '/dashboard/all-seller',
        element: <AdminRoute><AllSeller/></AdminRoute>
      },
      {
        path: '/dashboard/all-buyer',
        element: <AdminRoute><AllBuyer/></AdminRoute>
      },
      {
        path: '/dashboard/report-product',
        element: <AdminRoute><ReportProduct/></AdminRoute>
      },
    ]
  },

]);
