import * as Actions from "../actionsTypes"

const kittenReducer = (state, action) => {

    switch (action.type) {

        case Actions.CLOSE_CRUD_MODAL:
            return {
                ...state,
                isCrudModalOpen: false
            };

        case Actions.OPEN_CRUD_MODAL:
            return {
                ...state,
                isCrudModalOpen: true,
                kittenBeingCrud: action.payload,
                crudMode: action.meta.mode,
            };

        case Actions.HTTP_QUERY_STARTED:
            return {
                ...state,
                loading: true,
            };

        case Actions.HTTP_ADD_KITTEN_RETURNED:
            return {
                ...state,
                loading:false,
            };

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
            return {...state}

    }


};

export {kittenReducer}
