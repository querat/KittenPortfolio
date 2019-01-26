import * as Actions from "../actionsTypes"
import {Api} from "../../Api/Api"
import {actionShowTemporaryAlert} from "../alert/actions";

const actionGetKittensStarted = () => ({
    type: Actions.HTTP_GET_KITTENS_STARTED,
    payload: {},
    error: false,
    meta: {},
});

const actionGetKittensReturned = (response, isError = false) => ({
    type: Actions.HTTP_GET_KITTENS_RETURNED,
    payload: response,
    error: isError,
    meta: {},
});


const actionGetKittens = (sendAlertAfter = false) => (dispatch) => {
    dispatch(actionGetKittensStarted());

    return Api.kittens.get()
        .then((response) => {
            dispatch(actionGetKittensReturned(response.data.results));
            if (sendAlertAfter) {
                dispatch(actionShowTemporaryAlert("Kittens ready !", "info"));
            }
        })
        .catch((jsError) => {
            dispatch(actionGetKittensReturned([], true));
            dispatch(actionShowTemporaryAlert(
                Api.buildErrorMsg(jsError),
                "danger"));
            console.log("error", jsError)
        });

};

const actionDeleteKittenStarted = () => ({
    type: Actions.HTTP_DELETE_KITTENS_STARTED,
    payload: {},
    error: false,
    meta: {},
});

const actionDeleteKittenReturned = (isError = false) => ({
    type: Actions.HTTP_DELETE_KITTENS_RETURNED,
    payload: {},
    error: isError,
    meta: {},
});

const actionDeleteKitten = (kittenData) => (dispatch) => {
    dispatch(actionGetKittensStarted());
    return Api.kittens.delete(kittenData.id)
        .then(response => {
            dispatch(actionDeleteKittenReturned(response));
            dispatch(actionCloseCrudModal());
            dispatch(actionGetKittens()); // Refetch kittens after this one is deleted
            dispatch(actionShowTemporaryAlert(
                `deleted kitten !`
            ));
        })
        .catch(jsError => {
            dispatch(actionDeleteKittenReturned(true));
            dispatch(actionShowTemporaryAlert(
                Api.buildErrorMsg(jsError),
                "danger"
            ))
        });
};

const actionHttpQueryStarted = () => ({
    type: Actions.HTTP_QUERY_STARTED,
    payload: {},
    error: false,
    meta: {}
});

const actionHttpAddKittenReturned = (response, isError = false) => ({
    type: Actions.HTTP_ADD_KITTEN_RETURNED,
    payload: response,
    error: isError,
    meta: {}
});

const actionHttpAddKitten = (kittenData) => (dispatch) => {
    dispatch(actionHttpQueryStarted());

    return Api.kittens.create(kittenData)
        .then(response => {
            dispatch(actionHttpAddKittenReturned(response));
            dispatch(actionCloseCrudModal());
            dispatch(actionGetKittens());
            dispatch(actionShowTemporaryAlert(
                `added kitten ${kittenData.name} !`
            ));
        })
        .catch(jsError => {
            dispatch(actionShowTemporaryAlert(
                Api.buildErrorMsg(jsError),
                "danger"
            ));
            dispatch(actionHttpAddKittenReturned(jsError, true));
        })
};


const actionHttpEditKittenReturned = (response, isError = false) => ({
    type: Actions.HTTP_EDIT_KITTEN_RETURNED,
    payload: response,
    error: isError,
    meta: {}
});


const actionHttpEditKitten = (kittenData) => dispatch => {
    dispatch(actionHttpQueryStarted());

    return Api.kittens.update(kittenData)
        .then(response => {
            dispatch(actionCloseCrudModal());
            dispatch(actionShowTemporaryAlert(`kitten edited !`));
            dispatch(actionGetKittens());
        })
        .catch(jsError => {
            dispatch(actionShowTemporaryAlert(Api.buildErrorMsg(jsError), "danger"));
            dispatch(actionHttpEditKittenReturned(jsError, true));
        });
};


const actionOpenCrudModal = (mode, kittenData) => ({
    type: Actions.OPEN_CRUD_MODAL,
    payload: kittenData,
    error: false,
    meta: {
        mode: mode
    }
});

const actionCloseCrudModal = () => ({
    type: Actions.CLOSE_CRUD_MODAL,
    payload: {},
    error: false,
    meta: {}
});


export {
    actionOpenCrudModal,
    actionCloseCrudModal,
    actionGetKittens,
    actionGetKittensStarted,
    actionGetKittensReturned,
    actionDeleteKitten,
    actionDeleteKittenStarted,
    actionDeleteKittenReturned,
    actionHttpAddKitten,
    actionHttpAddKittenReturned,
    actionHttpQueryStarted,
    actionHttpEditKitten,
    actionHttpEditKittenReturned,
}