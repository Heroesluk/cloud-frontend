import {ThemeProvider} from "@mui/material/styles";
import {darkTheme, lightTheme} from "../App";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {itemData, shuffle} from "../Helper/helper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ButtonAppBar from "../Components/Bar";
import {ImageListItemBar} from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import {useRef} from "react";

export default function ImagesPage() {
    const boundingElement = useRef();
    const ar = shuffle(itemData)
    return (<ThemeProvider theme={lightTheme}>
        <CssBaseline/>
        <ButtonAppBar></ButtonAppBar>
        <Container maxWidth={false}
                   sx={{
                       display: 'flex',
                       alignItems: 'center',
                       flexDirection: 'column',
                       mr: 0,
                       mt: '10vh',
                   }}>
            <div style={{width: '65%'}}><Typography variant='h1' sx={{fontWeight: '500'}}>Your photos:</Typography>
            </div>


            <ImageList variant="masonry" sx={{width: '65%'}} cols={3}>
                {ar.map((item) => (
                    <Tooltip
                        PopperProps={{
                            popperOptions: {
                                modifiers: [
                                    {
                                        name: "offset",
                                        options: {
                                            offset: [0, -40],
                                        }
                                    }
                                ]
                            }
                        }}

                        placement="bottom" title={`${item.title}`}>
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>

                    </Tooltip>


                ))}
            </ImageList>

        </Container>

    </ThemeProvider>)
}




