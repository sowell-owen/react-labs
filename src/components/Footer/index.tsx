import React from 'react';
import { Typography, Container } from '@mui/material';
import { StyledFooter } from "./styles";

const Footer = () => {
    return (
        <StyledFooter>
            <Container maxWidth="md" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            }}>
                <Typography variant="body2" align="center" color="textSecondary">
                    &copy; {new Date().getFullYear()} iGadget. All rights reserved.
                </Typography>
            </Container>
        </StyledFooter>
    );
};

export default Footer;
