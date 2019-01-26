import * as Actions from "../actionsTypes"

const alertReducer = (state, action) => {

    switch (action.type) {

        case Actions.SHOW_ALERT:
            return {
                ...state,
                alertIsOpen: true,
                alertColor: action.payload.alertColor,
                alertMessage: action.payload.alertMessage,
            };

        case Actions.DISMISS_ALERT:
            return {
                ...state,
                alertIsOpen: false,
                alertMessage: "",
            };

        default:
            return {...state}

    }

};

export {alertReducer}
