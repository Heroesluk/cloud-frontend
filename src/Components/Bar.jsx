import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CloudIcon from '@mui/icons-material/Cloud';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ButtonAppBar({visible}) {
    return (
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
                {visible ? <><Button sx={{
                    pl: 1.5,
                    pr: 1.5,
                }} color="inherit">Login</Button>
                    <Button sx={{
                        ml: 3,
                        pl: 1.5,
                        pr: 1.5,
                        backgroundColor: "white",
                        color: "black", borderRadius: 0,
                    }}
                    >Sign up</Button></> : null}


            </Toolbar>
        </AppBar>


    );


}
