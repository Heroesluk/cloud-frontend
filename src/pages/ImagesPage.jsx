import {ThemeProvider} from "@mui/material/styles";
import {ip, lightTheme} from "../App";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import {useEffect, useState} from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ButtonAppBar from "../Components/Bar";
import {CustomModal} from "../Components/ImageClickPopup";
import axios from "axios";
import {IconButton} from "@mui/material";
import {FileUploadOutlined} from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from '@mui/material/TextField';

const Butt = ({disp, name}) => {
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
            <Typography variant='h6'>{name}</Typography>
        </div>
    );
};
const ImageEntry = ({item, setModalOpen, setSelectedImage, onDelete}) => {
    // console.log(item)
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
        setSelectedImage(item);
    };

    const handleDelete = async () => {
        // Call the onDelete function passed from the parent component
        onDelete(item.id);
    };

    return (
        <ImageListItem
            onMouseEnter={(e) => showButton(e)}
            onMouseLeave={(e) => hideButton(e)}
            key={item.url}>
            <Butt disp={disp} name={item.name}/>
            <IconButton
                style={{
                    position: "absolute",
                    top: "5px",
                    left: "5px",
                    color: "white",
                }}
                onClick={handleDelete}>
                <DeleteIcon/>
            </IconButton>

            <img
                onClick={handleImageClick}
                srcSet={`${item.url}`}
                src={`${item.url}`}
                alt={item.name}
                loading="lazy"
            />
        </ImageListItem>
    );
};

export default function ImagesPage() {
    const token = document.cookie
    const [dt, setData] = useState(null);
    const [upload, setUpload] = useState(false);
		const [searchQuery, setSearchQuery] = useState('');

    const fetch_data = async () => {
        if (token !== null) {
            try {
                const response = await axios.get(ip + '/available_files', {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error during login:', error);
            }
        }
    }

    useEffect(() => {
        // TODO: move this to external function

        fetch_data().then().finally();
        console.log(dt);

    }, []);

    const uploadImage = async () => {
			const files = document.getElementById('file-selector').files;

			for (let i = 0; i < files.length; i++) {
					try {
							const formData = new FormData();
							formData.append('file', files[i]);
	
							await axios.post(ip + '/upload', formData, {
									headers: {
											'Content-Type': 'multipart/form-data',
											'Authorization': 'Bearer ' + token
									}
							});    
							await fetch_data();
							console.log('Image uploaded successfully: ', response);
							setUpload(!upload)
					} catch (error) {
							console.error('Error uploading image:', error);
					}
			}
		};

    const [modalOpen, setModalOpen] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState(null);

    const deleteImage = async (imageId) => {
        try {
            await axios.post(
                ip + '/delete_image',
                {image_id: imageId},
                {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                }
            );

            await fetch_data();
        } catch (error) {
            console.error('Error deleting image:', error.response || error.message || error);
        }
    };

    // const ar = shuffle(itemData)
    return (<ThemeProvider theme={lightTheme}>
            <CssBaseline/>
            <ButtonAppBar upload={true}></ButtonAppBar>
            <Container maxWidth={false}
                       sx={{
                           display: 'flex',
                           alignItems: 'center',
                           flexDirection: 'column',
                           mr: 0,
                           mt: '10vh',
                       }}>

                <div style={{marginBottom: '2%', width: '65%'}}>
                    <Typography variant='h2' sx={{marginBottom: '5px', fontWeight: '500'}}>Your photos:</Typography>

                    <IconButton sx={{
                        backgroundColor: "white",
                        marginRight: '10px',
                        marginTop: '7px'
                        }} component="label">
                        <FileUploadOutlined/>
                        <input
                            id="file-selector"
                            type="file"
                            style={{display: 'none'}}
                            onChange={uploadImage}
                            accept="image/*, application/zip"
                            multiple
                        />
                    </IconButton>

                    <TextField
                        label="Search by name"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        value={searchQuery}
                    />
                </div>

                <ImageList variant="masonry" sx={{width: '65%'}} cols={3}>
                    {dt &&
											dt.data.filter((element) => element.name.toLowerCase().includes(searchQuery.toLowerCase()))
                        .map((item) => (
                            <ImageEntry
                                key={item.url}
                                item={item}
                                setModalOpen={setModalOpen}
                                setSelectedImage={setSelectedImage}
                                onDelete={deleteImage} // Pass the onDelete function
                            />
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

