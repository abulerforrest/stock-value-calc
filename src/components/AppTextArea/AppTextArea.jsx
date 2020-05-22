import React, { useContext } from 'react';

import {
    makeStyles
} from '@material-ui/core';

import { StoreContext } from '../../context/store';

const useStyles = makeStyles(() => ({
    textArea: {
        color: '#ffffff',
        display: 'flex',
        minHeight: 100,
        minWidth: 100,
        borderTop: 0,
        borderRight: 0,
        borderBottom: 0,
        borderLeft: '2px solid #ffffff',
        paddingLeft: 20,
        marginBottom: 20,
        fontSize: '3.75rem',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 300,
        lineHeight: 1.2,
        background: 'transparent',
        letterSpacing: '-0.00833em',
        resize: 'none',
        outline: 'none'
    }
}));

export const AppTextArea = (props) => {

    const classes = useStyles();

    const { textAreaRef } = useContext(StoreContext);

    const setTextAreaFocus = () => {
        textAreaRef.current.select();
    };
    
    return (
        <textarea
            onClick={setTextAreaFocus}
            ref={textAreaRef}
            onChange={() => {}}
            style={props.style}
            className={classes.textArea}
            value={props.value}
            wrap="hard"
        />
    );
}