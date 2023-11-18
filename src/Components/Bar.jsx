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

export default function ButtonAppBar() {
    const [value, setValue] = React.useState(0);

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
                    <Button sx={{
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
                    >Sign up</Button>

                </Toolbar>
            </AppBar>
            <Box p='25vh'
                 display="flex"
                 flexDirection='column'
                 justifyContent="flex-start"
                 alignItems="center"
                 minHeight="87vh"
            >
                <Typography variant="h2" component="div">
                    <Box sx={{fontWeight: '500'}}>Keep it simple</Box>
                </Typography>
                <Typography variant="h5" component="div">
                    <Box sx={{fontWeight: '500'}}> Access your photos from anywhere in the world</Box>
                </Typography>

                <Button sx={{
                    mt: 3,
                    borderRadius: 0,
                    padding: "2vh 5vh 2vh 5vh",
                    backgroundColor: "white",
                    color: "black"
                }} variant="contained">Confirm</Button>
            </Box>

            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Recents" icon={<RestoreIcon/>}/>
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>}/>
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon/>}/>
            </BottomNavigation>


        </Box>


    );


}
