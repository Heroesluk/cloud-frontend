import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from './Copyright';
import {Login} from "./pages/LoginPage";
import {Button, ImageList, ImageListItem, Stack, TextField} from "@mui/material";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {Page} from "./pages/FirstPage";
import {Register} from "./pages/RegisterPage";
import ImagesPage from "./pages/ImagesPage";
import {useState} from "react";

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    }
});


export const lightTheme = createTheme({
    palette: {
        mode: 'light',
    }
});


export const UserContext = React.createContext(null);

export default function App() {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null)


    return (<BrowserRouter>
            <UserContext.Provider value={{user: user, setUser: setUser, token: token, setToken: setToken}}>

                <Routes>
                    <Route path="/" element={<Page/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/Register" element={<Register/>}/>
                    <Route path="/Images" element={<ImagesPage/>}/>

                </Routes>
            </UserContext.Provider>

        </BrowserRouter>
    );
}




