import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from './ProTip';
import Copyright from './Copyright';
import {Login} from "./pages/LoginPage";
import {Button, ImageList, ImageListItem, Stack, TextField} from "@mui/material";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {Page} from "./pages/FirstPage";
import {Register} from "./pages/RegisterPage";
import ImagesPage from "./pages/ImagesPage";

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

export default function App() {

    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<Page/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Images" element={<ImagesPage/>}/>

        </Routes>
    </BrowserRouter>);
}




