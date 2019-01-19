import {combineReducers} from "redux"
import {kittenReducer} from "./kittenPage/reducer";

const combinedReducers = combineReducers({
    kittenPage:kittenReducer
});

export {combinedReducers}
