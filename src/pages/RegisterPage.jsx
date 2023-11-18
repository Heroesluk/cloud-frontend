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

export function Register() {
    const [value, setValue] = React.useState(null);


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
                        <TextField required id="login" label="login" variant="outlined"/>
                        <TextField required id="email" label="email" variant="outlined"/>
                        <TextField required id="password" label="password" variant="outlined"/>
                        <TextField required id="rpassword" label="repeat password" variant="outlined"/>

                        <Button variant="contained">Confirm</Button>
                        <div style={{color: "black", fontSize: "1.3vh", textAlign: "center"}}>
                            Already have an account?
                            <span style={{color: "blue"}}> Login here.</span>
                        </div>
                    </Stack>

                </ThemeProvider>


            </Box>


        </Background2>


    </ThemeProvider>)
}