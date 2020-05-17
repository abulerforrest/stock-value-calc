export const alertReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TEXT_SAVE':
            return { text: 'Saved the record to the database!' };
            case 'SET_TEXT_CLIPBOARD':
                return { text: 'Copied it to the clipboard!' };
        default:
            return state;
    }
};

export const valueReducer = (state, action) => {
    switch (action.type) {
        case 'input_current':
            return { ...state, today: action.payload };
        case 'input_initial':
            return { ...state, initial: action.payload };
        default:
            return state;
    }
};

export const diffReducer = (state, action) => {
    switch (action.type) {
        case 'total':
            return { ...state, total: 1234 };
        case 'last':
            return { ...state, last: 1234 };
        default:
            return state;
    }
};