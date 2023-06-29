import React from "react";

import { RouteObject } from 'react-router-dom'

import Home from "../pages/home";
import Product from "../pages/product";

export const ROUTES_CONFIG: RouteObject[] = [
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/product/:id",
        element: <Product/>,
    },

];