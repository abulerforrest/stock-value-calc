import React, { useContext } from 'react';

import {
    Button,
    makeStyles
} from "@material-ui/core";

import {
    Save as SaveIcon,
    FileCopy as FileCopyIcon
} from '@material-ui/icons';

import { StoreContext } from '../../context/store';

const useStyles = makeStyles(() => ({
    tools: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '55%',
    },
    button: {
        height: 44,
        minWidth: 224,
        color: 'white',
        borderRadius: 0,
        letterSpacing: 2,
        boxShadow: 'none',
        position: 'relative',
        whiteSpace: 'nowrap',
        margin: '0 20px 20px 0',
        border: '2px solid #EBA63F',
        padding: '0px 14px 0 14px',
        backgroundColor: 'rgba(29,29,44, 0.4)',
        '&:hover': {
            borderRadius: 4,
            boxShadow: 'none',
            borderColor: '#E40C2B',
            backgroundColor: 'rgba(29,29,44, 0.9)'
        },
        '&:disabled': {
            borderColor: ' rgba(235,166,63, 0.6)',
            color: 'rgba(255,255,255, 0.4)'
        }
    }
}));

export const AppToolbar = props => {

    const classes = useStyles();

    const {
        alert,
        alertMsg,
        textAreaRef
    } = useContext(StoreContext);

    const copyToClipboard = (e) => {
        alertMsg.setAlertMsg({ type: 'SET_TEXT_CLIPBOARD'});
        textAreaRef.current.select();
        const copy = document.execCommand('copy');
        if(copy) {
            e.target.focus();
            alert.setOpenAlert(true);
        }
    };

    const saveToTheRecord = (e) => {
        e.preventDefault();

        alertMsg.setAlertMsg({ type: 'SET_TEXT_SAVE'});
        alert.setOpenAlert(true);
    };

    return (
        <div className={classes.tools}>
            <Button
                disabled={props.disabledButtons}
                className={classes.button}
                onClick={saveToTheRecord}
                startIcon={<SaveIcon/>}
            >
                Save to the record
            </Button>
            <Button
                className={classes.button}
                variant="contained"
                disabled={props.disabledButtons}
                onClick={(e) => copyToClipboard(e)}
                startIcon={<FileCopyIcon/>}
            >
                    Copy to clipboard
            </Button>
        </div>
    );
}