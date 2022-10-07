import React from "react";
import { Stack } from "@mui/system";
import Divider from '@mui/material/Divider';

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

const Bio = () => {
    return (
        <Container>
            <Title>Bio</Title>
            <Stack
                direction="column"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}>

                <Stack direction="row" spacing={2}>
                    <Text>2019</Text>
                    <Text>2019 was full of advantages. I finished elementary school already knowing python and what I want do in life which is ...... Programming!😄 </Text>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Text>2020</Text>
                    <Text>The end of 2020 was wonderful along with covid. In covid I started to learn Luau deeply. And now my main native language is Luau. You definitely should learn that</Text>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Text>2021 - 2022</Text>
                    <Text>In 2021 I've started doing commissions. Something very weird to me do to. During commissions I learnt how hard is that to lead a team (don't do my mistake)</Text>
                </Stack>
            </Stack>
        </Container>
    )
}

export default Bio