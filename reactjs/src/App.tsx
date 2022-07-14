import { AppBar,Button, CssBaseline, ThemeProvider, Toolbar, Typography } from "@mui/material";
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      
    </ThemeProvider>
  );

}

export default App;
