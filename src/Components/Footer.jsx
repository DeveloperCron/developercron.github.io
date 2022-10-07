
import React from "react";
import styled from "styled-components";
import Mount from "./Core/Emoji";

const Container = styled.div`
    height: 10vh;
    width: 100%;
    display flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`


const Footer = () => {
    return (
        <Container>
            <Mount />
        </Container>
    )
}

export default Footer