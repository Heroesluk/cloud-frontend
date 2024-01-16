import {Button, Stack, TextField} from "@mui/material";
import * as React from "react";
import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import {darkTheme, ip, lightTheme} from "../App";
import ButtonAppBar from "../Components/Bar";
import {Background2} from "../Components/Background2";
import {Link} from 'react-router-dom';
import axios from 'axios';

export function Register() {
    const [value, setValue] = React.useState(null);
    const [errorLogin, setLoginError] = React.useState(false);
    const [errorEmail, setEmailError] = React.useState(false);
    const [errorPassword, setPasswordError] = React.useState(false);

    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const loginPattern = /([A-aZ-z0-9]|_|-)+/

    const handleRegister = async () => {
        const login = document.getElementById('login').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const rpassword = document.getElementById('rpassword').value;
        const errortext = document.getElementById('errortext');

        if (login === '') {
            errortext.innerText = 'Login cannot be empty!'; setLoginError(true); return;
        }
        if (!loginPattern.test(login)) {
            errortext.innerText = 'Login can only include uppercase or lowercase letters, numbers, dashes and underscores!'; setLoginError(true); return;
        }
        errortext.innerText = '';
        setLoginError(false);

        if (email === '') {
            errortext.innerText = 'Email cannot be empty!'; setEmailError(true); return;
        }
        if (!emailPattern.test(email)) {
            errortext.innerText = 'This email is not correct!'; setEmailError(true); return;
        }
        errortext.innerText = '';
        setEmailError(false);

        if (password === '') {
            errortext.innerText = 'Password cannot be empty!'; setPasswordError(true); return;
        }
        if (password.length < 8) {
            errortext.innerText = 'Password has to have 8 characters or more!'; setPasswordError(true); return;
        }
        if (!(password === rpassword)) {
            errortext.innerText = 'Passwords don\'t match!'; setPasswordError(true); return;
        }
        errortext.innerText = '';
        setPasswordError(false);

        const data = {
            username: login,
            email: email,
            password: password
        };

        try {
            const response = await axios.post(ip+'/register', data);
            console.log('Registration successful:', response.data);
        } catch (error) {
            console.error('Error during registration:', error);
            errortext.innerText = 'An error occured!';
            setLoginError(true);
            setEmailError(true);
            setPasswordError(true);
        }
    };

    return (<ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Background2 imageUrl={'/imageRegister.jpg'}>
            <ButtonAppBar visible={false}></ButtonAppBar>
            <Box p='15vh'
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
                        <div style={{color: "black", fontSize: "1.8vh", textAlign: "center"}}>Register to ImageCloud
                        </div>
                        <div id='errortext' style={{wordWrap: 'break-word', width: "300px", color: "red", fontSize: "1.8vh", textAlign: "center"}}></div>
                        <TextField required id="login" error={errorLogin} label="login" variant="outlined"/>
                        <TextField required id="email" error={errorEmail} label="email" variant="outlined"/>
                        <TextField required id="password" type="password" error={errorPassword} label="password" variant="outlined"/>
                        <TextField required id="rpassword" type="password" error={errorPassword} label="repeat password" variant="outlined"/>

                        <Button variant="contained" onClick={handleRegister}>Confirm</Button>
                        <div style={{color: "black", fontSize: "1.3vh", textAlign: "center"}}>
                            Already have an account?
                            <span style={{color: "blue"}}> <Link to="/login">Login here.</Link></span>
                        </div>
                    </Stack>

                </ThemeProvider>


            </Box>


        </Background2>


    </ThemeProvider>)
}