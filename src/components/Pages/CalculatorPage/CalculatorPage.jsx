import React, {
    useEffect,
    useContext
  } from 'react';

  import {
    makeStyles
  } from '@material-ui/core/styles';

  import {
    Chip,
    Typography
  } from '@material-ui/core';

  import AppToolbar from '../../AppToolbar';
  import AppTextArea from '../../AppTextArea';
  import AppTextField from '../../AppTextField';

  // custom hooks
import {
  useCalcDiff,
  useAlgorithm
} from '../../../context/hooks';

import { StoreContext } from '../../../context/store';

  const useStyles = makeStyles(() => ({
    inputFields: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        width: "60%"
    },
    heading: {
      color: "#ffffff",
      marginBottom: 20,
      letterSpacing: 2
    },
    result: {
      display: 'flex',
      color: '#ffffff',
      marginBottom: 20,
      maxWidth: '50%',
      paddingLeft: 20,
      borderLeft: '2px solid #ffffff'
    }
  }));

  export const CalculatorPage = () => {

    const classes = useStyles();

    const {
      last,
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

      last.setLast(9432);

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
      <React.Fragment>
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
              Algorithm <Chip style={{color: "#ffffff", backgroundColor: '#E40C2B'}} label="v0.0.1" />
            </Typography>
            <AppTextArea
                style={algorithm === ''? {opacity: 0.3}: {}}
                onChange={() => {}}
                className={classes.textArea}
                value={algorithm !== ''? algorithm: "Enter today's numbers"}
                wrap="hard"
            />
          </div>
          <AppToolbar
            disabledButtons={buttonsState.buttonsDisabled}
          />
      </React.Fragment>
    );
  }