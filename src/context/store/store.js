import React, { 
    useRef,
    useReducer
} from 'react';

import {
    valueReducer,
    alertReducer
} from '../reducers';

export const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {

    // refs
    const textAreaRef = useRef(null);

    // reducers
    const [alertMsg, setAlertMsg] = useReducer(alertReducer, { text: '' });
    const [value, setValue] = useReducer(valueReducer, { 
        today: localStorage.getItem('input_current') || '', 
        initial: localStorage.getItem('input_initial') || ''
    });

    // state
    const [
        buttonsDisabled,
        setButtonsDisabled
    ] = React.useState(false);

    const [last, setLast] = React.useState(0);
    const [currency, setCurrency] = React.useState('kr');
    const [algorithm, setAlgorithm] = React.useState('');
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const [openAlert, setOpenAlert] = React.useState(false);

    const store = {
        textAreaRef: textAreaRef,
        drawer: { openDrawer, setOpenDrawer },
        alert: { openAlert, setOpenAlert },
        alertMsg: { alertMsg, setAlertMsg },
        valuesState: { value, setValue },
        buttonsState: { buttonsDisabled, setButtonsDisabled },
        algorithm: { algorithm, setAlgorithm },
        currency: { currency, setCurrency },
        last: { last, setLast }
    }

    return (
        <StoreContext.Provider
            value={store}
        >
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;