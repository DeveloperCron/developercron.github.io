import { useSpring, animated } from "@react-spring/web";
import { FiGithub, FiTwitter } from "react-icons/fi"
import { IoLogoDiscord } from "react-icons/io5"
import { SiRoblox } from "react-icons/si"
import Profile from "Assets/Profile.jpeg";
import React, { useState } from "react";
import styled from "styled-components"
import { Stack } from "@mui/system";

const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ProfileImg = styled.img`
    width: 170px;
    height: 170px;
    border-radius: 100%;
`

const Name = styled.h1`
    color: #fff;
    font-weight: 800;
`

const TextContainer = styled.div`
    height: auto;
    width: auto;
    background-color: rgb(37, 37, 41);
    font-weight: bold;
    border-radius: 10px;
`
const InnerText = styled.p`
    color: #fff;
    margin: 10px;
    font-weight: 500;
`

const Item = styled(animated.a)`
    background-color: rgb(37, 37, 41);
    width: 35px;
    height: 35px;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 0.5em;
`

const Link = ({ logo, url, name }) => {
    const LogoElement = logo
    const [IsHovered, setHovering] = useState(false)

    const { offset } = useSpring({
        to: {
            offset: IsHovered ? 10 : 0
        }
    })

    return (
        <Item
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            href={url}
            style={{
                transform: offset.to(value => `translateY(-${value}px)`),
            }}
            title={name}
        >
            <LogoElement color="white" size={20} />
        </Item>
    )
}

const Header = () => {
    return (
        <Container>
            <ProfileImg src={Profile} alt="Profile Picture" />
            <Name>Lior</Name>
            <TextContainer>
                <InnerText >
                    Hello, I'm an indie game developer based in Israel! 👋
                </InnerText>
            </TextContainer>
            <Stack spacing={2} direction="row" sx={{
                marginTop: 2,
            }}>
                <Link logo={FiGithub} url="https://github.com/DeveloperCron" name="Github" />
                <Link logo={FiTwitter} url="https://twitter.com/dev_cronrblx" name="Twitter" />
                <Link logo={IoLogoDiscord} url="https://discordapp.com/users/735371358120312863" name="Discord" />
                <Link logo={SiRoblox} url="https://www.roblox.com/users/1736230219/profile" name="Roblox" />
            </Stack>
        </Container>
    )
}

export default Header