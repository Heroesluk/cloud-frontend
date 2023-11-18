import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import * as React from "react";
import {darkTheme} from "../App";


export function Page() {
    return (<ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Container maxWidth="sm">
            <Box sx={{my: 4}}>
            </Box>
        </Container>
    </ThemeProvider>)
}