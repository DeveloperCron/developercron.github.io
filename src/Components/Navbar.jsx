import React from "react";
import styled from "styled-components";
import ButtonElement from "./Core/MButton";
import { Link } from 'react-router-dom';
import { Stack } from "@mui/system";

const Container = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    min-height: 6vh;
`

const Logo = styled.h2`
    color: #fff;
    margin: 20px
`


const Navbar = () => {
    return (
        <Container>
            <Logo>
                Dev_Cron
            </Logo>
            <Stack spacing={1} direction="row">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <ButtonElement Title="Home" />
                </Link>
                <Link to="/work" style={{ textDecoration: 'none' }}>
                    <ButtonElement Title="Works" />
                </Link>
            </Stack>
        </Container>
    )
}

export default Navbar