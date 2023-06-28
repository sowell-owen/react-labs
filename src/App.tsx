import React from 'react';
import ReduxProvider from "./store/provider/ReduxProvider";
import { CssBaseline } from "@mui/material";
import { HashRouter } from "react-router-dom";
import RenderRoutes from "./routes/RenderRoutes";
import { AppContainer } from "./styles/styles";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
    return (
        <ReduxProvider>
            <CssBaseline/>
            <Navbar/>
            <AppContainer>
                <HashRouter>
                    <RenderRoutes/>
                </HashRouter>
            </AppContainer>
            <Footer/>
        </ReduxProvider>
    );
};

export default App;