import {ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import * as React from "react";
import {darkTheme} from "../App";
import cover from "/image1.jpg";
import {styled} from "@mui/material";
import ButtonAppBar from "../Components/Bar";


const imageURL = "/image1.jpg";
const Background = styled("div")({
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage: `url(${imageURL})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
});

export function Page() {


    return (<ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Background>
            <ButtonAppBar></ButtonAppBar>
        </Background>
    </ThemeProvider>)
}