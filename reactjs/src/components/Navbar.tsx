import { AppBar,Button, CssBaseline, IconButton, ThemeProvider, Toolbar, Typography } from "@mui/material";
import DriveEtaIcon from '@mui/icons-material/DriveEta';

export function Navbar() {
    return(
        <AppBar>
        <Toolbar>
          <IconButton color="inherit" edge="start">

          </IconButton>
          <Typography variant="h6">Full Cycle Delivery</Typography>
        </Toolbar>
      </AppBar>
    )
}