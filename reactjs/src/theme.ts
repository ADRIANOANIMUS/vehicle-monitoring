import { createTheme, PaletteOptions } from "@mui/material";

const pallete: PaletteOptions = {
    mode: 'dark',
    primary: {
        main: '#FFCD00',
        contrastText: '#242526'
    },
    background: {
        default: '#242526'
    }
}

const theme = createTheme({
    pallete,

});
export default theme;