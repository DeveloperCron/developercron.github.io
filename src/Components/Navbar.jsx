import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import ButtonElement from "./Core/MButton";
import { Link } from 'react-router-dom';
import { Stack, Container } from '@mui/system';
import { MenuItem, Box, Menu, IconButton } from '@mui/material';
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    Home
                </Link>
            </MenuItem>
            <MenuItem>
                <Link to="/work" style={{ textDecoration: 'none' }}>
                    Works
                </Link>
            </MenuItem>
        </Menu>
    );

    return (
        <AppBar component="nav"
            sx={{
                boxShadow: "none",
                backgroundColor: 'rgba(19, 19, 21 , 0.0)',
                backdropFilter: "blur(3px)",
            }}>
            <Container maxWidth={"md"} sx={{
                display: "flex",
            }}>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{
                        margin: 2,
                    }}
                >
                    Dev_Cron
                </Typography>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <Stack spacing={1} direction="row" sx={{ padding: 1 }}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <ButtonElement Title="Home" />
                        </Link>
                        <Link to="/work" style={{ textDecoration: 'none' }}>
                            <ButtonElement Title="Works" />
                        </Link>
                    </Stack>
                </Box>
                <IconButton edge="end"
                    sx={{
                        display: {
                            xs: 'flex',
                            md: 'none'
                        }
                    }}
                    onClick={handleMobileMenuOpen}
                >
                    <BiMenu
                        size={30}
                        aria-controls={mobileMenuId}
                        color="#fff"
                    >
                    </BiMenu>
                </IconButton>
            </Container>
            {renderMobileMenu}
        </AppBar >
    );
}

export default Navbar