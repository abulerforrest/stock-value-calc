import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Main from './containers/Main/Main';

import { StoreProvider } from './context/store';

import {
  BrowserRouter as Router
} from "react-router-dom";

import {
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#EBA63F'
    },
    primary: {
      main: '#3CBCC3'
    }
  },
  typography: {
    fontFamily: [
      'Articulat'
    ].join(','),
  },
});

ReactDOM.render(
  <React.Fragment>
    <Router>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <StoreProvider>
          <Main />
        </StoreProvider>
      </MuiThemeProvider>
    </Router>
  </React.Fragment>,
  document.getElementById('root')
);