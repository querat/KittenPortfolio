import {combineReducers} from "redux"
import {kittenReducer} from "./kittenPage/reducer";
import {alertReducer} from "./alert/reducer";

const combinedReducers = combineReducers({
    kittenPage: kittenReducer,
    alert: alertReducer,
});

export {combinedReducers}
