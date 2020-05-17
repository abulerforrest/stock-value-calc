import React, { 
  useEffect,
  useContext 
} from 'react';

import './App.css';

import {
  fade,
  makeStyles
} from '@material-ui/core/styles';

import clsx from 'clsx';

import {
  Chip,
  Paper,
  Typography
} from '@material-ui/core';

import { StoreContext } from './context/store';

// app components
import Top from './components/Top/Top';
import AppMenu from './components/AppMenu/AppMenu';
import AppToolbar from './components/AppToolbar/AppToolbar';
import AppSnackbar from './components/AppSnackbar/AppSnackbar';
import AppTextArea from './components/AppTextArea/AppTextArea';
import AppTextField from './components/AppTextField/AppTextField';

// custom hooks
import {
  useCalcDiff,
  useAlgorithm
} from './context/hooks';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 220 -drawerWidth,
  },
  inputFields: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      flexWrap: "wrap",
      width: "60%"
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 220,
  },
  paper: {
    padding: 30,
    backgroundColor: 'transparent',
    boxShadow: 'none'
  },
  heading: {
    color: "#ffffff",
    marginBottom: 20
  },
  result: {
    display: 'flex',
    color: '#ffffff',
    marginBottom: 20,
    maxWidth: '50%',
    paddingLeft: 20,
    borderLeft: '2px solid #ffffff'
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

function App() {

  const classes = useStyles();

  const {
    last,
    drawer,
    currency,
    valuesState,
    buttonsState
  } = useContext(StoreContext);

  const handleChange = (e) => {
    valuesState.setValue({ 
      type: e.target.id,
      payload: parseInt(e.target.value)
    });

    localStorage.setItem(
        e.target.id,
        e.target.value
    );
  }

  useEffect(() => {
    buttonsState.setButtonsDisabled(
      valuesState.value.today && valuesState.value.initial? false: true
    );

    last.setLast(9259);

  }, [buttonsState, last, valuesState.value.initial, valuesState.value.today]);

  const diffTotal = useCalcDiff(valuesState.value.today, valuesState.value.initial);
  const diffLast = useCalcDiff(valuesState.value.today, last.last);

  const algorithm = useAlgorithm(
    valuesState.value.initial,
    valuesState.value.today,
    diffTotal,
    diffLast,
    currency.currency
  );

  const defaultInputProps = {
    type: "number",
    variant: "outlined"
  }
  const disabledInputProps = {
    disabled: true,
    variant: "outlined"
  }

  return (
    <div className="App">
      <Top drawerWidth={240} />
      <Paper className={classes.paper}>
        <AppMenu />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: drawer.openDrawer,
          })}
        >
          <Typography
            className={classes.heading}
            variant="h4" component="h4"
          >
            Stock value calculator
          </Typography>
          <div className={classes.inputFields}>
            <AppTextField
              {...disabledInputProps}
              value={last.last}
              id="input_last"
              label="Last stock value"
              placeholder="Last stock value"
            />
            <AppTextField
              {...defaultInputProps}
              value={valuesState.value.today}
              id="input_current"
              label={`Today's stock value (${currency.currency})`}
              placeholder="Today's stock value"
              onChange={(e) => handleChange(e)}
            />
            <AppTextField
              {...defaultInputProps}
              value={valuesState.value.initial}
              id="input_initial"
              label={`Initial stock value (${currency.currency})`}
              placeholder="Initial stock value"
              onChange={(e) => handleChange(e)}
            />
            <AppTextField
              {...disabledInputProps}
              value={
                diffTotal? `${diffTotal}${currency.currency}`: ''
              }
              id="input_diff_total"
              label="+/- Total"
              placeholder="+/- Total"
            />
            <AppTextField
              {...disabledInputProps}
              value={
                diffLast? `${diffLast}${currency.currency}`: ''
              }
              id="input_diff_last"
              label="+/- Since last"
              placeholder="+/- Since last"
            />
        </div>
        <div className="result-container">
          <Typography variant="h6" className="result">
            Algorithm <Chip style={{color: fade("#ffffff", 0.74)}} label="Previous record: { will end up here }" color="primary" variant="outlined" />
          </Typography>
          <AppTextArea
              style={algorithm === ''? {opacity: 0.3}: {}}
              onChange={() => {}}
              className={classes.textArea}
              value={algorithm !== ''? algorithm: "Enter today's numbers"}
              wrap="hard"
          />
        </div>
        <AppToolbar disabledButtons={buttonsState.buttonsDisabled}  />
        <AppSnackbar
          severity="success"
          autoHideDuration={2000}
        />
        </main>
      </Paper>
    </div>
  );
}
export default App;