
import {createTheme} from '@mui/material'
import { blue, grey, red } from '@mui/material/colors';

export const LightTheme = createTheme({
    palette: {
        primary:{
            main: '#339DA2',
            dark: '#2A6D7',
            light: '#3CB6C1',
            contrastText: '#FFFFFF',
        },
        secondary:{
            main: grey[500],
            dark: '#000000',
            light: '#4A9AC1',
            contrastText: '#FFFFFF',
        },
        background: {
            default: '#FFFFFF',
            paper: '#f7f6f3',
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

    }
})