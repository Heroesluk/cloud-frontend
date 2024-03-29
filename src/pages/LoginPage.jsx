import {Button, Stack, TextField} from "@mui/material";
import * as React from "react";
import {useContext, useState} from "react";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import {darkTheme, ip, lightTheme, UserContext} from "../App";
import ButtonAppBar from "../Components/Bar";
import {Background2} from "../Components/Background2";
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

export function Login() {
    const [value, setValue] = useState(null);
    const [hasError, setHasError] = useState(false);
    const navigate = useNavigate();
    const { setUser, setToken} = useContext(UserContext);


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
            const response = await axios.post(ip+'/login', data);
            console.log('Login successful:');
            setUser(data.username)
            document.cookie=response.data['access_token']
            navigate("/images");

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
                        <TextField
                            error={hasError}
                            id="login"
                            label="login"
                            variant="outlined"
                            onKeyDown={(e) => {if (e.key === 'Enter') {handleLogin();}}}
                        />
                        <TextField
                            error={hasError}
                            id="password"
                            type="password"
                            label="password"
                            variant="outlined"
                            onKeyDown={(e) => {if (e.key === 'Enter') {handleLogin();}}}
                        />
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