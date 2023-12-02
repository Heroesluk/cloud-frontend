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
import axios from 'axios';

export function Login() {
    const [value, setValue] = React.useState(null);
    const [hasError, setHasError] = React.useState(false);

    const handleLogin = async () => {
        const login = document.getElementById('login').value;
        const password = document.getElementById('password').value;
        const errortext = document.getElementById('errortext');

        if (login === '' || password === '') {
            errortext.innerText = 'Login and password cannot be empty!';
            setHasError(true);
            return;
        }
        errortext.innerText = '';
        setHasError(false);

        const data = {
            username: login,
            password: password
        };
    
        try {
            const response = await axios.post('http://localhost:8080/login', data);
            console.log('Login successful:', response.data);
        } catch (error) {
            console.error('Error during login:', error);
            errortext.innerText = 'Login or password incorrect!';
            setHasError(true);
        }
      };

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
                        <div id='errortext' style={{color: "red", fontSize: "1.8vh", textAlign: "center"}}></div>
                        <TextField error={hasError} id="login" label="login" variant="outlined"/>
                        <TextField error={hasError} id="password" label="password" variant="outlined"/>
                        <Button variant="contained" onClick={handleLogin}>Confirm</Button>
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