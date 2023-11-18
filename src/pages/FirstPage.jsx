import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import * as React from "react";
import {darkTheme} from "../App";
import cover from "/image1.jpg";
import {styled} from "@mui/material";
import ButtonAppBar from "../Components/Bar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";


export const Background2 = styled('div')(({imageUrl}) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}));

export function Page() {
    const [value, setValue] = React.useState(null);


    return (<ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Background2 imageUrl={'/image1.jpg'}>
            <ButtonAppBar visible={true}></ButtonAppBar>
            <Box p='25vh'
                 display="flex"
                 flexDirection='column'
                 justifyContent="flex-start"
                 alignItems="center"
                 minHeight="87vh"
            >
                <Typography variant="h2" component="div">
                    <Box sx={{fontWeight: '500', userSelect: "none"}}>Keep it simple</Box>
                </Typography>
                <Typography variant="h5" component="div">
                    <Box sx={{
                        fontWeight: '500',
                        userSelect: "none"
                    }}> Access your photos from anywhere in the world</Box>
                </Typography>

                <Button sx={{
                    mt: 3,
                    pl: '2.3vh',
                    pr: '2.3vh',
                    fontSize: '3vh',
                    borderRadius: 1,
                    backgroundColor: "white",
                    color: "black"
                }} variant="contained">Confirm</Button>
            </Box>

            <BottomNavigation
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    stickToBottom: {
                        width: '100%',
                        position: 'fixed',
                        bottom: 0,
                    },
                }}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Privacy"/>
                <BottomNavigationAction label="Terms"/>
                <BottomNavigationAction label="Cookies"/>
                <BottomNavigationAction label="About"/>

            </BottomNavigation>
        </Background2>


    </ThemeProvider>)
}