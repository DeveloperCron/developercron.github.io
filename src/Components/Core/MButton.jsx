import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '10px',
    lineHeight: 1.5,
    backgroundColor: 'rgb(37, 37, 41)',
    borderRadius: '10vh',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#rgb(40, 40, 41)',
    },
});


const ButtonElement = (props) => {
    return (
        <BootstrapButton variant="contained">
            {props.Title}
        </BootstrapButton>
    );
}

export default ButtonElement