
import { createBrowserRouter } from "react-router";
import Root from "../layouts/Roots";
import Home from "../pages/Home";
import { Component } from "react";
import About from "../pages/About";


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
            }
        ]
    },
]);
