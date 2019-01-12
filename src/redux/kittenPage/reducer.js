import * as Actions from "../actionsTypes"

const kittenReducer = (state, action) => {

    switch (action.type) {

        case Actions.HTTP_GET_KITTENS_STARTED:
            return {
                ...state,
                loading: true
            };

        case Actions.HTTP_GET_KITTENS_RETURNED:
            return {
                ...state,
                kittens: action.payload || [],
                loading: false,
            };

        case Actions.HTTP_DELETE_KITTENS_STARTED:
            return {
                ...state,
                loading:true,
            };

        case Actions.HTTP_DELETE_KITTENS_RETURNED:
            return {
                ...state,
                loading: false,
            };

        default:
            if (!action.type.startsWith("@@redux"))
                console.warn("untreated action: ", action);
            return {...state}

    }


};

export {kittenReducer}
