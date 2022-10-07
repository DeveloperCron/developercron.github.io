import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: auto;
`

const Text = styled.p`
    color: #fff;
`

const Title = styled.h2`
    color: #fff;
    text-decoration: underline grey 5px;
    margin: 20px;
`

const About = () => {
    return (
        <Container>
            <Title>About me</Title>
            <Text>Hello, I’m Lior known as Dev_Cron is some platforms.
                I mainly develop on the Roblox platform along with a team or sometimes alone.
                Within my career I’ve learnt to do UI design, programming and designing.
                Although I like programming the most. I always have the passion to move forward and try new things.
            </Text>
        </Container>
    )
}

export default About