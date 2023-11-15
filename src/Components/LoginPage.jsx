import {Button, Stack, TextField} from "@mui/material";
import * as React from "react";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {darkTheme} from "../App";

export function Login() {
    return (<ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Container maxWidth="sm">
            <Box sx={{my: 4}}>
                <Stack spacing={2}>
                    <TextField id="login" label="Login" variant="outlined"/>
                    <TextField id="password" label="password" variant="outlined"/>
                    <Button variant="contained">Confirm</Button>
                </Stack>

            </Box>
        </Container>
    </ThemeProvider>)
}