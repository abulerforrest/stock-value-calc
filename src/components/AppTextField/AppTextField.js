import React from 'react';

import {
    TextField,
    makeStyles, 
    InputAdornment
} from '@material-ui/core';

import {
    AttachMoney as AttachMoneyIcon
} from '@material-ui/icons';

const AppTextField = props => {

    const useStyles = makeStyles(() => ({
        inputContainer: {
            margin: "10px 10px 10px 0"
        },
        inputLabel: {
            color : '#ffffff !important',
            fontSize: '16px !important',
            fontWeight: 'bold',
            textShadow: '0 0 4px rgba(255,255,255, 0.8), 0 0 20px rgba(255,255,255, 0.6), 0 0 10px rgba(230,0,115, 0.4), 0 0 15px rgba(230,0,115, 0.4), 0 0 20px rgba(230,0,115, 0.4)'
        },
        cssOutlinedInput: {
            '&$inputFocused $inputOutline': {
                borderColor: '#F64C72 !important',
                boxShadow: '0 1px 2px 1px rgba(255, 105, 135, .3)'
            }
        },
        disabled: {
            opacity: .5
        },
        inputFocused: {},
    
        inputOutline: {
            borderWidth: '1px',
            borderColor: '#ffffff !important',
        }
    }));

    const classes = useStyles();

    const inputLabelProps = { 
        classes: {
            root: classes.inputLabel,
            focused: classes.inputFocused,
        }
    }

    const inputProps = { 
        classes: {
            notchedOutline: classes.inputOutline,
            root: classes.cssOutlinedInput,
            focused: classes.inputFocused
        },
        startAdornment: (
        <InputAdornment position="start">
            <AttachMoneyIcon />
        </InputAdornment>
        )
    }
    
    return (
        <div className={classes.inputContainer}>
            <TextField
                value={props.value}
                type={props.type}
                id={props.id}
                label={props.label}
                variant={props.variant}
                placeholder={props.placeholder}
                className={props.disabled? classes.disabled: ''}
                ref={props.inputRef}
                InputProps={inputProps}
                InputLabelProps={inputLabelProps}
                disabled={props.disabled}
                required={props.required}
                onChange={props.onChange}
            />
        </div>
    );
}

export default AppTextField;