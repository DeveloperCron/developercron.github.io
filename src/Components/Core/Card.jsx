import * as React from 'react';
import {
    Card,
    CardContent,
    Typography,
    CardMedia,
    CardActionArea,
} from '@mui/material'
import { styled } from '@mui/material/styles';

const CardElement = styled(Card)(({ theme }) => ({
    background: theme.palette.primary.main,
    maxWidth: 375,
}));

const LinkCard = props => {
    return (
        <CardElement variant='none'>
            <CardActionArea onClick={(() => {
                console.log("Clicked")
            })}>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.Img}
                    alt="green iguana"
                    sx={{ borderRadius: 3 }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" color="#fff">
                        {props.Title}
                    </Typography>
                    <Typography variant="body2" color="#fff">
                        {props.Description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </CardElement>
    );
}

export default LinkCard