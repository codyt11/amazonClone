import Landing from './pages/landing';
import './App.css';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: 	'#000000',
    },
  },
});

function App() {
  
  return (
    <ThemeProvider theme={theme} >
      <div className="App">
        <CssBaseline/>
        <Landing/>
      </div>
    </ThemeProvider>
  );
}

export default App;
