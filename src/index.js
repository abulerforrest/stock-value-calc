import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';

import { StoreProvider } from './context/store';

import {
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core';

const theme = createMuiTheme();

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <React.Fragment>
      <StoreProvider>
          <App />
      </StoreProvider>
    </React.Fragment>
  </MuiThemeProvider>,
  document.getElementById('root')
);