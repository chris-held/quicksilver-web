import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';

// TODO: move any global styles here
export const theme = createMuiTheme({
  coolGradient:
    'linear-gradient(90deg, rgba(163,100,217,1) 0%, rgba(12,215,246,1) 100%)',
  colors: {
    black: '#000',
    white: '#FFF',
    grey: {
      dark: '#333333',
      light: '#CCC',
    },
  },
  overrides: {
    MuiContainer: {
      root: {
        marginTop: 32,
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
