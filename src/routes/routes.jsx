
import { createBrowserRouter } from "react-router";
import Root from "../layouts/Roots";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";



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
            }
        ]
    },
]);
