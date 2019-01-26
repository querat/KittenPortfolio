const initialState = {
    loading: false,
    kittens: [],

    isCrudModalOpen: false,
    crudMode: "ADDING", // "CREATE READ UPDATE DELETE (CRUD)"
    kittenBeingCrud:{
        id: -1,
        name: "",
        breed: "",
    }
};

export {initialState};