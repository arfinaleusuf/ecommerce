
import { createBrowserRouter } from "react-router";
import Root from "../layouts/Roots";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Product_details from "../pages/Product_details";
import Login from "../pages/Login";
import ProtectedRouter from "./ProtectedRouter";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'about',
                Component: About
            },
            {
                path: 'products',
                element: <Products />
            },
            {
                path: 'products/:OurId',
                element: <ProtectedRouter>
                    <Product_details />
                </ProtectedRouter>
            },
            {
                path: "login",
                element: <Login />
            },
        ]
    },
]);
