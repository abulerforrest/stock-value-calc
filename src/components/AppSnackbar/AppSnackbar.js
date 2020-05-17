import React, { useContext } from 'react';

import {
    Snackbar
} from '@material-ui/core';

import { StoreContext } from '../../context/store';

import Alert from '@material-ui/lab/Alert';

const AppSnackbar = (props) => {

    const {
        alert,
        alertMsg
    } = useContext(StoreContext);

    const closeAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        alert.setOpenAlert(false);
    };

    return (
        <Snackbar
            open={alert.openAlert}
            autoHideDuration={props.autoHideDuration}
            onClose={closeAlert}
        >
            <Alert
                onClose={closeAlert}
                severity={props.severity}
            >
                {alertMsg.alertMsg.text}
            </Alert>
        </Snackbar>
    );
}

export default AppSnackbar;