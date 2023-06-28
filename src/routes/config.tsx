import React from "react";

import { RouteObject } from 'react-router-dom'

import Home from "../pages/Home";

export const ROUTES_CONFIG: RouteObject[] = [
    {
        path: "/",
        element: <Home/>,
    },

];