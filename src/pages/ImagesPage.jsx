import {ThemeProvider} from "@mui/material/styles";
import {lightTheme, UserContext} from "../App";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {itemData, shuffle} from "../Helper/helper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ButtonAppBar from "../Components/Bar";
import {useContext, useEffect, useRef, useState} from "react";
import {CustomModal} from "../Components/ImageClickPopup";
import axios from "axios";
import {Button, IconButton, TextField} from "@mui/material";
import {FileUploadOutlined} from "@mui/icons-material";

let example = {
    "data": [
        {
            "folder_id": 11,
            "id": 14,
            "image_add_date": "Tue, 05 Dec 2023 18:39:26 GMT",
            "image_size": 786486,
            "name": "aaa.bmp",
            "url": "https://storage.googleapis.com/cloud_image_bucket/11/aaa.bmp?Expires=1701881425&GoogleAccessId=cloud-storage-admin%40ageless-webbing-405115.iam.gserviceaccount.com&Signature=DM1zjzmhoar6dm491gmb9gCURco7XNmOnZjk%2BymlNn3mYPctCJz4K4p5qTA0b9I4jG%2Bm5FGXF1ZWAYmBlEAaSzDSc9172jgQkn%2F0cqZk7lVaEmhPeP0MJluh2SRALQDkQ9XGal%2BJPrbvckhIwYDiwkCIaqeCPIHAJO4s5EsWj%2Fb9P9tJykhVJmuI0GkCvvnEVrv%2BEu6T6PY2predgqNJLSKvGuAgL54mcwdj1tp9DRUQEcDHMkVyLE4sUY2hLqcQxem96BFgiw4B2AcEG%2FQbBJfnOUfBvp7eQdOYPyP7QEQ10EU8Vwr9lJNawLcCYUq6vpBqFrrIhlec6s3VqOVQ8Q%3D%3D"
        }
    ]
}


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
        setSelectedImage(item.url);
    };
    return (
        <ImageListItem
            onMouseEnter={(e) => showButton(e)}
            onMouseLeave={(e) => hideButton(e)}
            key={item.url}>
            <Butt disp={disp}/>

            <img
                onClick={handleImageClick}
                srcSet={`${item.url}`}
                src={`${item.url}`}
                alt={item.name}
                loading="lazy"
            />
        </ImageListItem>
    )
}

export default function ImagesPage() {
    const {user, token} = useContext(UserContext);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetch_data = async () => {
            if (token !== null) {
                try {
                    const response = await axios.get('http://127.0.0.1:5000/available_files', {
                        headers: {
                            'Authorization': 'Bearer ' + token
                        }
                    });
                    console.log('list got');

                    setData(response.data);
                    console.log(data)


                } catch (error) {
                    console.error('Error during login:', error);
                }
            }

        }
        fetch_data().then().finally();

    }, []);


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
                    {example.data.map(item => (

                        <ImageEntry
                            key={item.url}
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

