import React from "react";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import LinkCard from "Components/Core/Card";
import Items from "./CardList";
import styled from "styled-components";

const Title = styled.p`
    color: #fff;
    font-weight: 500;
    font-size: 1.4em;
`


const Cards = () => {
    return (
        <Container maxWidth="sm">
            <Title>Works</Title>
            <Grid
                container
                spacing={4}
            >
                {Items.map((item, index) => {
                    return (
                        <Grid item xs={12} sm={6} md={6} key={index}>
                            <a href={item.Url} style={{ textDecoration: 'none' }}>
                                <LinkCard Title={item.Title} Description={item.Description} Img={item.Img} />
                            </a>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}

export default Cards