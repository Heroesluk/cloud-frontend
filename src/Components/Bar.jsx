import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloudIcon from '@mui/icons-material/Cloud';

export default function ButtonAppBar() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" style={{background: 'rgba(0,0,0,0.5)', boxShadow: 'none'}}>
                <Toolbar>
                    <Box
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <CloudIcon style={{fontSize: "60px"}}/>
                    </Box>
                    <Typography variant="h4" component="div" sx={{flexGrow: 1}}>
                        <Box sx={{fontWeight: 'bold'}}> ImageCloud</Box>
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <Typography variant="h2" component="div">
                    <Box sx={{fontWeight: 'bold'}}>Keep it simple</Box>
                </Typography>
                <Typography variant="h5" component="div">
                    <Box sx={{fontWeight: 'bold'}}> Access your photos from anywhere in the world</Box>
                </Typography>
            </Box>

        </Box>
    );
}
