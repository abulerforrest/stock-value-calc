import React, {
  useContext
} from 'react';

import './Main.css';

import {
  makeStyles
} from '@material-ui/core/styles';

import clsx from 'clsx';

import {
  Paper,
  Typography
} from '@material-ui/core';

import { StoreContext } from '../../context/store';

// app components
import Top from '../../components/Top';
import AppMenu from '../../components/AppMenu';
import AppSnackbar from '../../components/AppSnackbar';

// router
import { Route } from 'react-router-dom';

import CalculatorPage from '../../components/Pages/CalculatorPage';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  palette: {
    secondary: {
      main: '#E33E7F !important'
    }
  },
  heading: {
    color: '#ffffff',
    marginBottom: 20,
    fontSize: 40,
    letterSpacing: 2
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 220 -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 220,
  },
  paper: {
    margin: 0,
    padding: 30,
    height: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    minHeight: '100%',
    backgroundColor: 'transparent'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  }
}));

function Main() {

  const classes = useStyles();

  const {
    drawer,
  } = useContext(StoreContext);

  return (
    <React.Fragment>
      <Top drawerWidth={240} />
      <Paper className={classes.paper}>
        <AppMenu />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: drawer.openDrawer,
          })}
        >
          <Typography variant="h2" component="h2" class={classes.heading}>Welcome User!</Typography>
          <Route path="/" component={CalculatorPage} />
          <AppSnackbar
            autoHideDuration={6000}
          />
        </main>
      </Paper>
    </React.Fragment>
  );
}

export default Main;