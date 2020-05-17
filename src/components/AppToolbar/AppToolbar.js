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
    buttonSubmit: {
        whiteSpace: 'nowrap',
        background: 'linear-gradient(45deg, #F64C72 30%, #FF8E53 70%)',
        border: 0,
        position: 'relative',
        borderRadius: 4,
        letterSpacing: 1,
        boxShadow: '0 3px 5px 7px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 38,
        width: 200,
        minWidth: 200,
        padding: '0 10px',
        margin: '0 20px 20px 0',
        '&:hover': {
            background: 'linear-gradient(45deg, rgba(255, 255, 255, .8) 30%, #FF8E53 70%)',
            boxShadow: '0 4px 6px 8px rgba(255, 105, 135, .3)',
            top: -1
        }
    },
    tools: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '55%',
    },
    buttonClipboard: {
        background: '#F64C72',
        border: 0,
        letterSpacing: 1,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 38,
        width: 200,
        minWidth: 200,
        padding: '0 10px',
        '&:hover': {
            background: '#f8819c',
            boxShadow: '0 4px 6px 8px rgba(255, 105, 135, .3)',
            top: -1
        }
    }
}));

const AppToolbar = props => {

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
            openAlertClipboard();
        }
    };

    const openAlertClipboard = () => {
        alert.setOpenAlert(true);
    };

    const openAlertSave = () => {
        alert.setOpenAlert(true);
    };

    const saveToTheRecord = (e) => {
        e.preventDefault();

        alertMsg.setAlertMsg({ type: 'SET_TEXT_SAVE'});
        openAlertSave();
    };

    return (
        <div className={classes.tools}>
            <Button
                type="submit"
                disabled={props.disabledButtons}
                className={classes.buttonSubmit}
                variant="contained"
                size="small"
                color="primary"
                onClick={saveToTheRecord}
                startIcon={<SaveIcon/>}
            >
                Save to the record
            </Button>
            <Button
                className={classes.buttonClipboard}
                variant="contained"
                size="small"
                color="primary"
                disabled={props.disabledButtons}
                onClick={(e) => copyToClipboard(e)}
                startIcon={<FileCopyIcon/>}
            >
                    Copy to clipboard
            </Button>
        </div>
    );
}

export default AppToolbar;