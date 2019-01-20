import * as Actions from "../actionsTypes"
import {Api} from "../../Api/Api"

const actionGetKittensStarted = () => ({
    type: Actions.HTTP_GET_KITTENS_STARTED,
    payload: {},
    error: false,
    meta: {},
});

const actionGetKittensReturned = (response) => ({
    type: Actions.HTTP_GET_KITTENS_RETURNED,
    payload: response,
    error: (200 <= response.statusCode && response.statusCode < 300),
    meta: {},
});

const actionGetKittens = () => (dispatch) => {
    dispatch(actionGetKittensStarted());

    return Api.kittens.get()
        .then((response) => {
            console.log("success", response)
            dispatch(actionGetKittensReturned(response.data.results))
        })
        .catch((response) => {
            console.log("error", response)
        });

};

const actionDeleteKittenStarted = () => ({
    type: Actions.HTTP_DELETE_KITTENS_STARTED,
    payload: {},
    error: false,
    meta: {},
});

const actionDeleteKittenReturned = (response) => ({
    type: Actions.HTTP_DELETE_KITTENS_RETURNED,
    payload: response,
    error: (200 <= response.statusCode && response.statusCode < 300),
    meta: {},
});

const actionDeleteKitten = (kittenId) => (dispatch) => {
    dispatch(actionGetKittensStarted());

    return Api.kittens.delete(kittenId)
        .then(response => {
            console.log(`deleted kitten ${kittenId}`, response);
            dispatch(actionDeleteKittenReturned(response));
            dispatch(actionGetKittens()); // Refetch kittens after this one is deleted
            // todo dispatch(actionShowAlert(`kitten deleted`, "success"));
        })
        .catch(response => {
            console.log("error deleting kitten: ", response);
            dispatch(actionDeleteKittenReturned())
            // todo dispatch(actionShowAlert("Error deleting kitten", "warning"));
        });
};

const actionHttpQueryStarted = () => ({
    type: Actions.HTTP_QUERY_STARTED,
    payload: {},
    error: false,
    meta: {}
});

const actionHttpAddKittenReturned = (response) => ({
    type: Actions.HTTP_ADD_KITTEN_RETURNED,
    payload: response,
    error: 200 <= response.statusCode && response.statusCode < 300,
    meta: {}
});

const actionHttpAddKitten = (kittenData) => (dispatch) => {
    dispatch(actionHttpQueryStarted());

    return Api.kittens.create(kittenData)
        .then(response => {
            console.log("kitten added");
            dispatch(actionHttpAddKittenReturned(response));
            dispatch(actionCloseCrudModal());
            dispatch(actionGetKittens());
        })
        .catch(jsError => {
            console.log("error adding kitten", Api.parseDjangoRestError(jsError));
            // todo show temp alert
            dispatch(actionHttpAddKittenReturned(jsError));
        })
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
}