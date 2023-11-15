import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from './ProTip';
import Copyright from './Copyright';
import {Button, ImageList, ImageListItem, Stack, TextField} from "@mui/material";

import {ThemeProvider, createTheme} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
const itemData = [
    {
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        title: "Breakfast",
    },
    {
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        title: "Burger",
    },
    {
        img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
        title: "Camera",
    },
    {
        img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
        title: "Coffee",
    },
    {
        img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
        title: "Hats",
    },
    {
        img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
        title: "Honey",
    },
    {
        img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
        title: "Basketball",
    },
    {
        img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
        title: "Fern",
    },
    {
        img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
        title: "Mushrooms",
    },
    {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Tomato basil",
    },
    {
        img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
        title: "Sea star",
    },
    {
        img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
        title: "Bike",
    },
];

export default function App() {

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Container maxWidth="sm">
                <Box sx={{my: 4}}>
                    {/*<Typography variant="h4" component="h1" gutterBottom>*/}
                    {/*    Material UI Vite.js example*/}
                    {/*</Typography>*/}
                    {/*<ProTip/>*/}
                    {/*<ImageGrid></ImageGrid>*/}

                    {/*<Copyright/>*/}
                    <Register></Register>


                </Box>
            </Container>
        </ThemeProvider>
    );
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







