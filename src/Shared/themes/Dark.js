import {createTheme} from '@mui/material'
import { blue, grey, red } from '@mui/material/colors';

export const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary:{
            main: '#339DA2',
            dark: '#2A6D7',
            light: '#3CB6C1',
            contrastText: '#ffff',
        },
        secondary:{
            main: grey[500],
            dark: '#000000',
            light: '#4A9AC1',
            contrastText: '#ffff',
        },
        background: {
            default: '#31404C',
            paper: '#202a32',
        },
        favorite:{
            main: red[500],
            dark: '#000000',
            light: '#4A9AC1',
            contrastText: '#ffff',
        },
        share:{
            main: blue[500],
            dark: '#000000',
            light: '#4A9AC1',
            contrastText: '#ffff',
        }
        
    },
    typography: {
        allVariants: {
            color: '#ffff',
        }
    }
});