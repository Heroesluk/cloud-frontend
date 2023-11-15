import {Button, Stack, TextField} from "@mui/material";
import * as React from "react";

function Login() {
    return <Stack spacing={2}>
        <TextField id="login" label="Login" variant="outlined"/>
        <TextField id="password" label="password" variant="outlined"/>
        <Button variant="contained">Confirm</Button>
    </Stack>
}