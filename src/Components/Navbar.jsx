import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import ButtonElement from "./Core/MButton";
import { Link } from 'react-router-dom';
import { Stack, Container } from '@mui/system';
import { MenuItem, Box, Menu, IconButton } from '@mui/material';
import { BiMenu } from "react-icons/bi";

const List = [
    {
        url: "/",
        text: "Home"
    },
    {
        url: "/work",
        text: "Works"
    }
]

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
            {List.map((item, index) => {
                return (
                    <MenuItem onClick={handleMobileMenuClose} key={index}>
                        <Link to={item.url} style={{ textDecoration: 'none' }}>
                            {item.text}
                        </Link>
                    </MenuItem>
                )
            })}
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
                justifyContent: "space-between"
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
                        {List.map((item, index) => {
                            return (
                                <Link to={item.url} key={index} style={{ textDecoration: 'none' }}>
                                    <ButtonElement Title={item.text} />
                                </Link>
                            )
                        })}
                    </Stack>
                </Box>
                <IconButton edge="end" onClick={handleMobileMenuOpen} sx={{
                    display: {
                        xs: 'flex',
                        md: 'none'
                    },
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: `#fff`,
                    borderRadius: 2,
                    height: 1 / 2,
                    m: 1,
                }}>
                    <BiMenu
                        size={24}
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