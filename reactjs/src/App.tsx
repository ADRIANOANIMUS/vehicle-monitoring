import { CssBaseline, Grid, MenuItem, ThemeProvider} from "@mui/material";
import { Navbar } from "./components/Navbar";
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Navbar/>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <form>
            <select>
              <MenuItem value="">
                <em>Select one route</em>

              </MenuItem>
            </select>
          </form>
        </Grid>
        <Grid item xs={12} sm={9}></Grid>
      </Grid>
    </ThemeProvider>
  );

}

export default App;
