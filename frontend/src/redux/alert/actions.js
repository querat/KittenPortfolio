import * as Actions from "../actionsTypes"

const actionShowAlert = (message, color = "info") => ({
    type: Actions.SHOW_ALERT,
    payload: {
        alertMessage: message,
        alertColor: color,
    },
    error: false,
    meta: {},
});


const actionDismissAlert = () => ({
    type: Actions.DISMISS_ALERT,
    payload: {},
    error: false,
    meta: {},
});


let _temporaryAlertTimeout = null;
const actionShowTemporaryAlert = (message, color = "info", clearAfterMs = 8000) => dispatch => {

    // Dismiss an eventual alert being displayed
    if (_temporaryAlertTimeout !== null) {
        dispatch(actionDismissAlert());
        clearTimeout(_temporaryAlertTimeout);
        _temporaryAlertTimeout = null;
    }

    // Show the new alert !
    dispatch(actionShowAlert(message, color));

    // Dismiss the alert when its timer is elapsed
    _temporaryAlertTimeout = setTimeout(() => {
        dispatch(actionDismissAlert());
    }, clearAfterMs);
};


export {
    actionShowTemporaryAlert,
    actionShowAlert,
    actionDismissAlert,
}