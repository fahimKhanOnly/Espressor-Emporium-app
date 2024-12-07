import * as ReactDOM from "react-dom/client";
import * as React from "react";
import { StrictMode } from "react";
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from "./components/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee";
import Coffees from "./components/Coffees";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AuthProvider from "./provider/AuthProvider";
import Users from "./components/Users";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Coffees></Coffees>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>
  },
  {
    path: "/users",
    element: <Users></Users>,
    loader: () => fetch('http://localhost:5000/users'),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);