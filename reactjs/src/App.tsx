import { CssBaseline, ThemeProvider} from "@mui/material";
import { Navbar } from "./components/Navbar";
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Navbar/>
      <Grid container>
        

      </Grid>
    </ThemeProvider>
  );

}

export default App;
