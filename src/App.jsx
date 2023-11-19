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
        </Routes>
    </BrowserRouter>);
}

function ImageGrid() {
    const data = {
        "data": [
            {
                "folder_id": 1,
                "id": 1,
                "image_add_date": "Sun, 01 Jan 2023 12:00:00 GMT",
                "image_size": 1024,
                "name": "image1.jpg"
            },
            {
                "folder_id": 1,
                "id": 2,
                "image_add_date": "Mon, 02 Jan 2023 14:30:00 GMT",
                "image_size": 2048,
                "name": "image2.jpg"
            },
            {
                "folder_id": 1,
                "id": 3,
                "image_add_date": "Tue, 03 Jan 2023 10:45:00 GMT",
                "image_size": 1536,
                "name": "image3.jpg"
            }
        ]
    }

    return (<ImageList sx={{width: 500, height: 450}} cols={3} rowHeight={164}>
        {itemData.map((item) => (
            <ImageListItem key={item.img}>
                <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                />
            </ImageListItem>
        ))}
    </ImageList>)
}







