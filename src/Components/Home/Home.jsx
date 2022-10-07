import React from "react";
import Header from "./Header";
import About from "./About";
import Bio from "./Bio";
import styled from "styled-components";
import { useSpring, animated, config } from "@react-spring/web";
import { Container } from "@mui/system";

const Page = styled(animated.div)`
    width: auto;
    height: auto
`

const Home = () => {
    const { offset } = useSpring({
        to: {
            offset: 0
        },
        from: {
            offset: 200
        },
        config: config.default
    })

    return (
        <Page style={{
            transform: offset.to(value => `translateY(-${value}px)`),
        }}>
            <Header />
            <Container maxWidth="sm">
                <About />
                <Bio />
            </Container>
        </Page>
    )
}

export default Home