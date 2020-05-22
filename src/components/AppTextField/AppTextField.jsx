import React from 'react';

import {
    TextField,
    makeStyles,
    InputAdornment
} from '@material-ui/core';

import {
    AttachMoney as AttachMoneyIcon
} from '@material-ui/icons';

export const AppTextField = props => {

    const useStyles = makeStyles(() => ({
        inputContainer: {
            margin: "10px 10px 10px 0"
        },
        inputLabel: {
            color : '#ffffff !important',
            fontSize: '16px !important',
            fontWeight: 'bold'
        },
        cssOutlinedInput: {
            '&$inputFocused $inputOutline': {
                borderColor: '#E40C2B !important',
                borderRadius: 4
            }
        },
        disabled: {
            opacity: .5
        },
        inputFocused: {},

        inputOutline: {
            borderRadius: 0,
            borderWidth: '2px',
            borderColor: '#3CBCC3 !important',
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