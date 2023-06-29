import React from 'react';
import ReduxProvider from "./store/provider/ReduxProvider";
import { CssBaseline } from "@mui/material";
import { HashRouter } from "react-router-dom";
import RenderRoutes from "./routes/RenderRoutes";
import { AppContainer } from "./styles/styles";

const App = () => {
    return (
        <ReduxProvider>
            <CssBaseline/>
            <AppContainer>
                <HashRouter>
                    <RenderRoutes/>
                </HashRouter>
            </AppContainer>
        </ReduxProvider>
    );
};

export default App;