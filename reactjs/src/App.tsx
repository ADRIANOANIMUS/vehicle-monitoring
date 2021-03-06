import { Button, CssBaseline, Grid, MenuItem, ThemeProvider} from "@mui/material";
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
              <MenuItem value="">
                Route 1
              </MenuItem>
            </select>
            <div style={{textAlign:'center'}}>
            <Button type="submit" variant="contained">Start Route</Button>
            </div>
          </form>
        </Grid>
        <Grid item xs={12} sm={9}></Grid>
      </Grid>
    </ThemeProvider>
  );

}

export default App;
