
import {createTheme} from '@mui/material'
// import { blue, grey, red } from '@mui/material/colors';

export const LightTheme = createTheme({
    palette: {
        primary:{
            main: '#339DA2',
            dark: '#2A6D7',
            light: '#3CB6C1',
            contrastText: '#FFFFFF',
        },
        secondary:{
            main: 'black',
            dark: '#000000',
            light: '#4A9AC1',
            contrastText: '#FFFFFF',
        },
        background: {
            default: '#b4c3cf',
            paper: '#5f7d95',
        },
        

    }
})