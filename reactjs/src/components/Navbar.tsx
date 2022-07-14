import { AppBar,Button, CssBaseline, ThemeProvider, Toolbar, Typography } from "@mui/material";
import DriveEtaIcon from '@mui/icons-material/DriveEta';

export function Navbar() {
    return(
        <AppBar>
        <Toolbar>
          <Typography variant="h6">Full Cycle Delivery</Typography>
        </Toolbar>
      </AppBar>
    )
}