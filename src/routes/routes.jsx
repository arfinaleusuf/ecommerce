
import { createBrowserRouter } from "react-router";
import Root from "../layouts/Roots";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Product_details from "../pages/Product_details";



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
                element: <Products/>
            },
            {
                path: 'products/:id',
                element: <Product_details/>
            }
        ]
    },
]);
