import { AppBar,Button, CssBaseline, ThemeProvider, Toolbar, Typography } from "@mui/material";
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Full Cycle Delivery</Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );

}

export default App;
