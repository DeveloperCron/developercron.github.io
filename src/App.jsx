import Main from "Components/Main";

import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#18181b",
        },
        secondary: {
            main: "#333436"
        }
    },
    card: {
        maxWidth: 343,
        margin: 'auto',
        borderRadius: 12,
        padding: 12,
    }
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="lg">
                <Main />
            </Container >
        </ThemeProvider >
    )
}

export default App