import {Button, Stack, TextField} from "@mui/material";
import * as React from "react";

function Register() {
    return <Stack spacing={2}>
        <TextField required id="login" label="Login" variant="outlined"/>
        <TextField required id="email" label="Email" variant="outlined"/>
        <TextField required id="password" label="Password" variant="outlined"/>
        <TextField required id="rpassword" label="Repeat password" variant="outlined"/>

        <Button variant="contained">Confirm</Button>
    </Stack>

}