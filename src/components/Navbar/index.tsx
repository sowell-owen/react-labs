import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import CartCounter from "../CartCounter";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const toggleLogin = () => setIsLoggedIn(prevState => !prevState)
    return (
        <AppBar style={{ marginBottom: '20px' }} position="static">
            <Toolbar>
                <Typography onClick={() => navigate('/')} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    iGadget
                </Typography>
                {/*<Button color="inherit">Index</Button>*/}
                {/*<Button color="inherit">About</Button>*/}
                {/*<Button color="inherit">Services</Button>*/}
                {/*<Button color="inherit">Contact</Button>*/}
                <CartCounter/>
                <Button onClick={toggleLogin} color="inherit">{isLoggedIn ? 'Logout' : 'Login'}</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
