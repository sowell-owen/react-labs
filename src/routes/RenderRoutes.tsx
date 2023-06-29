import React, { FC } from "react";
import { useRoutes } from "react-router-dom";

import { ROUTES_CONFIG } from "./config";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RenderRoutes: FC = () => {
    const routes = useRoutes(ROUTES_CONFIG);
    return <>
        <Navbar/>
        {routes}
        <Footer/>
    </>;
};

export default RenderRoutes;