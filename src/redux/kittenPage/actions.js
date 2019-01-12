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
            dispatch(actionGetKittensReturned(response))
        })
        .catch((response) => {
            console.log("error", response)
        });

};

export {
    actionGetKittens,
    actionGetKittensStarted,
    actionGetKittensReturned,
}