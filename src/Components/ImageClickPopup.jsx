import {Box, IconButton, Modal} from "@mui/material";
import {Close as CloseIcon, GetApp as GetAppIcon} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import * as React from "react";

export function CustomModal({open, onClose, selectedImage}) {
    const {name, image_size, image_add_date, url} = selectedImage || {};

    console.log(selectedImage)
    console.log("huj")

    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                    maxWidth: "95vw",
                    maxHeight: "95vh",
                    overflow: "auto",
                }}
            >
                <IconButton
                    onClick={onClose}
                    style={{position: "absolute", top: 0, right: 0, color: "black"}}
                >
                    <CloseIcon/>
                    <Typography variant="caption" sx={{marginLeft: 1}}>
                        Close
                    </Typography>
                </IconButton>
                <img src={url} alt="Full Resolution" style={{width: "100%"}}/>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column", // Display each piece of information in a new line
                        justifyContent: "space-between",
                        marginTop: 2,
                    }}
                >
                    <Typography variant="caption">{name}</Typography>
                    <Typography variant="caption">{`Size: ${image_size}`}</Typography>
                    <Typography variant="caption">{`Date Added: ${image_add_date}`}</Typography>
                    <IconButton
                        onClick={() => window.open(url, "_blank")}
                        style={{color: "black"}}
                    >
                        <GetAppIcon/>
                        <Typography variant="caption" sx={{marginLeft: 1}}>
                            Download
                        </Typography>
                    </IconButton>
                </Box>

            </Box>
        </Modal>
    );
}
