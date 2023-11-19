import {Button, Stack, TextField} from "@mui/material";
import * as React from "react";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {darkTheme, lightTheme} from "../App";
import ButtonAppBar from "../Components/Bar";
import Typography from "@mui/material/Typography";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {Background2} from "../Components/Background2";
import { Link } from 'react-router-dom';

export function Login() {
    const [value, setValue] = React.useState(null);


    return (<ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Background2 imageUrl={'/imageLogin.jpg'}>
            <ButtonAppBar visible={false}></ButtonAppBar>
            <Box p='25vh'
                 display="flex"
                 flexDirection='column'
                 justifyContent="flex-start"
                 alignItems="center"
                 minHeight="87vh"
            >
                <ThemeProvider theme={lightTheme}>
                    <Stack spacing={2} sx={{
                        background: 'white',
                        pl: 4, pr: 4, pt: 4, pb: 4, borderRadius: 1,

                    }}>
                        <div style={{color: "black", fontSize: "1.8vh", textAlign: "center"}}>Log in to ImageCloud</div>
                        <TextField id="login" label="login" variant="outlined"/>
                        <TextField id="password" label="password" variant="outlined"/>
                        <Button variant="contained">Confirm</Button>
                        <div style={{color: "black", fontSize: "1.3vh", textAlign: "center"}}>
                            Not a ImageCloud member?
                            <span style={{color: "blue"}}> <Link to="/register"> Sign up here.</Link></span>
                        </div>
                    </Stack>

                </ThemeProvider>
            </Box>
        </Background2>
    </ThemeProvider>)
}