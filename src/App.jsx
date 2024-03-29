import * as React from 'react';
import {useState} from 'react';
import {Login} from "./pages/LoginPage";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {createTheme} from '@mui/material/styles';
import {Page} from "./pages/FirstPage";
import {Register} from "./pages/RegisterPage";
import ImagesPage from "./pages/ImagesPage";


export const ip = "https://cloud-backend-s3crlxaida-ew.a.run.app"


export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    }
});


export const lightTheme = createTheme({
    palette: {
        mode: 'light',
    }
});


export const UserContext = React.createContext(null);

export default function App() {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null)

    return (<BrowserRouter>
            <UserContext.Provider value={{user: user, setUser: setUser, token: token, setToken: setToken}}>
                <Routes>
                    <Route path="/" element={<Page/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/Register" element={<Register/>}/>
                    <Route path="/Images" element={<ImagesPage/>}/>
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    );
}




