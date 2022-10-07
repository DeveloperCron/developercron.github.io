import React from "react"
import Cards from "./Cards"
import styled from "styled-components";
import { useSpring, animated, config } from "@react-spring/web";

const Page = styled(animated.div)`
    width: auto;
    height: auto
`

const Work = () => {
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
            <Cards />
        </Page>
    )
}

export default Work