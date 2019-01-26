import {initialState as kittenPageInitialState} from "./kittenPage/state"
import {initialState as alertInitialState} from "./alert/state";

const state = {
    kittenPage: kittenPageInitialState,
    alert: alertInitialState
};

export {state};