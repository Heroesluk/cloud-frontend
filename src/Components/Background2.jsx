import {styled} from "@mui/material";

export const Background2 = styled('div')(({imageUrl}) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundImage: `url(${imageUrl})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}));