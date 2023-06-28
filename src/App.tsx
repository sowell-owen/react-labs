import React from 'react';
import ReduxProvider from "./store/provider/ReduxProvider";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
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
                <BrowserRouter>
                    <RenderRoutes/>
                </BrowserRouter>
            </AppContainer>
            <Footer/>
        </ReduxProvider>
    );
};

export default App;