import {Button, Stack, TextField} from "@mui/material";
import * as React from "react";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {Login} from "./LoginPage";
import {darkTheme} from "../App";

export function Register() {
    return <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Container maxWidth="sm">
            <Box sx={{my: 4}}>
                <Stack spacing={2}>
                    <TextField required id="login" label="Login" variant="outlined"/>
                    <TextField required id="email" label="Email" variant="outlined"/>
                    <TextField required id="password" label="Password" variant="outlined"/>
                    <TextField required id="rpassword" label="Repeat password" variant="outlined"/>

                    <Button variant="contained">Confirm</Button>
                </Stack> </Box>
        </Container>
    </ThemeProvider>


}