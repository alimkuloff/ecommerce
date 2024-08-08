
import { useRoutes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Suspense, lazy } from "react";

import { Loading } from "../utils";

const Home = lazy(() => import("./home/Home"));
const Private = lazy(() => import("./private/private"));

const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const Products = lazy(() => import("./dashboard/products/products"));
const SingleProduct = lazy(() => import("./dashboard/products/singleProduct"));
const Users = lazy(() => import("./dashboard/users/users"));
const Profile = lazy(() => import("./dashboard/profile/profile"));
const Cart = lazy(() => import("../components/cart/Cart"));

const Auth = lazy(() => import("./auth/Auth"));
const Login = lazy(() => import("./auth/login/Login"));
const Register = lazy(() => import("./auth/register/Register"));

const RouteController = () => {
   const auth = useSelector(state => state);
   return useRoutes([
      {
        path: "/",
        element: <Suspense fallback={<Loading />}><Home /></Suspense>,
      },
      {
        path: "/dashboard",
        element: auth.token ? <Suspense fallback={<Loading />}><Private /></Suspense> : <Navigate to="/auth" />,
        children: [
          {
            path: "",
            element: <Suspense fallback={<Loading />}><Dashboard /></Suspense>,
            children: [
              {
                path: "",
                element: <Suspense fallback={<Loading />}><Products /></Suspense>,
              },
              
              {
                path: "users",
                element: <Suspense fallback={<Loading />}><Users /></Suspense>,
              },
              {
                path: "profile",
                element: <Suspense fallback={<Loading />}><Profile /></Suspense>,
              },
            ],
          },
        ],
      },

      {
         path: "/products/:id",
         element: <Suspense fallback={<Loading />}><SingleProduct /></Suspense>,
       },

      {
        path: "/auth",
        element: auth.token ? <Navigate to="/dashboard" /> : <Suspense fallback={<Loading />}><Auth /></Suspense>,
        children: [
          {
            path: "",
            element: <Suspense fallback={<Loading />}><Login /></Suspense>,
          },
          {
            path: "register",
            element: <Suspense fallback={<Loading />}><Register /></Suspense>,
          },
        ],
      },
    ]);
  };
  
  export default RouteController;