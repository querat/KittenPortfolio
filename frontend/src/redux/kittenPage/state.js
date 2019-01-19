const initialState = {
    loading: false,
    kittens: [],

    crudMode: "CREATE", // "CREATE READ UPDATE DELETE (CRUD)"
    kittenBeingCrud:{
        id: -1,
        name: "",
        breed: "",
    }
};

export {initialState};