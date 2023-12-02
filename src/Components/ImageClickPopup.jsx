import {Box, IconButton, Modal} from "@mui/material";
import {Close as CloseIcon, GetApp as GetAppIcon} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import * as React from "react";


export function CustomModal({open, onClose, selectedImage}) {
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
                    <Typography variant="caption" sx={{marginLeft: 1}}>Close</Typography>
                </IconButton>
                <img src={selectedImage} alt="Full Resolution" style={{width: "100%"}}/>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: 2,
                    }}
                >
                    <IconButton onClick={() => window.open(selectedImage, "_blank")} style={{color: "black"}}>
                        <GetAppIcon/>
                        <Typography variant="caption" sx={{marginLeft: 1}}>Download</Typography>
                    </IconButton>
                </Box>
            </Box>
        </Modal>
    );
}