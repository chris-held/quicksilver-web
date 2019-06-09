import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Hello from './Hello';
import { createMuiTheme } from '@material-ui/core/styles';

import { ThemeProvider } from '@material-ui/styles';

//TODO: move any global styles here
export const theme = createMuiTheme({
  coolGradient:
    'linear-gradient(90deg, rgba(163,100,217,1) 0%, rgba(12,215,246,1) 100%)',
  colors: {
    black: '#000',
    white: '#FFF',
    grey: {
      dark: '#333333',
      light: '#EFEFEF',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Hello} />
          <Route path="/about" component={Hello} />
          <Route path="/topics" component={Hello} />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
