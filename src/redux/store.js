import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"

import {state as initialState} from "./state"
import {combinedReducers} from "./reducer";

const store = createStore(
    combinedReducers,
    initialState,
    applyMiddleware(thunk)
);

export {
    store
}