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
import {Button, ImageListItemBar} from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import {useRef, useState} from "react";
import {Modal, IconButton, Box} from '@mui/material';
import {Close as CloseIcon, GetApp as GetAppIcon} from '@mui/icons-material';
import {CustomModal} from "../Components/ImageClickPopup";

const Butt = ({disp}) => {
    return (
        <div
            style={{
                position: 'absolute',
                bottom: '0px',
                width: '100%',
                opacity: disp,
                backgroundColor: 'rgba(0,0,0,0.4)',
                color: "white",
                textAlign: "center"
            }}
        >
            <Typography variant='h6'>norm</Typography>
        </div>
    );
};

const ImageEntry = ({item, setModalOpen, setSelectedImage}) => {
    const [disp, setDisp] = useState(0);
    const showButton = (e) => {
        e.preventDefault();
        setDisp(1);

    };

    const hideButton = (e) => {
        e.preventDefault();
        setDisp(0);

    };
    const handleImageClick = () => {
        setModalOpen(true);
        setSelectedImage(item.img);
    };
    return (
        <ImageListItem
            onMouseEnter={(e) => showButton(e)}
            onMouseLeave={(e) => hideButton(e)}
            key={item.img}>
            <Butt disp={disp}/>

            <img
                onClick={handleImageClick}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
            />
        </ImageListItem>
    )
}

export default function ImagesPage() {
    const [modalOpen, setModalOpen] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState(null);

    // const ar = shuffle(itemData)
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
                <div style={{width: '65%'}}>
                    <Typography variant='h1' sx={{fontWeight: '500'}}>Your
                        photos: </Typography>
                </div>


                <ImageList variant="masonry" sx={{width: '65%'}} cols={3}>
                    {itemData.map((item) => (

                        <ImageEntry
                            key={item.img}
                            item={item}
                            setModalOpen={setModalOpen}
                            setSelectedImage={setSelectedImage}></ImageEntry>

                    ))}
                </ImageList>

                <CustomModal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    selectedImage={selectedImage}
                />


            </Container>

        </ThemeProvider>
    )

}

