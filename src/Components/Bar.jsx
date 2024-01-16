import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CloudIcon from '@mui/icons-material/Cloud';
import {Link} from 'react-router-dom';

export default function ButtonAppBar({visible, upload}) {
    let bar;
    if (visible) {
        bar = 'rgba(0,0,0,0.5)';
    } else {
        bar = 'rgba(0,0,0)'
    }
    return (
        <AppBar position="static" style={{background: bar, boxShadow: 'none'}}>
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

                <Box
                    display="flex"
                    flexDirection='row'
                    gap='10px'
                >
                </Box>

                {visible ? (<><Button sx={{
                    pl: 1.5,
                    pr: 1.5
                }} color="inherit"
                                      component={Link}
                                      to="/login">
                    Login
                </Button>
                    <Button
                        sx={{
                            ml: 3,
                            pl: 1.5,
                            pr: 1.5,
                            backgroundColor: "white",
                            color: "black", borderRadius: 0,
                        }}
                        component={Link}
                        to="/register">
                        Sign up </Button></>) : null}
            </Toolbar>
        </AppBar>


    );


}
