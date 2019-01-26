import axios from "axios"

const MOCKUP = false;
const MOCKUP_LAG = 1000; // milliseconds
let mockupKittens = [{
    id: 1,
    name: "Fluffy",
    breed: "Maine Coon"
}, {
    id: 2,
    name: "Drunky",
    breed: "Scottish Fold"
}, {
    id: 3,
    name: "Kitty",
    breed: "Tabby"
}];

class _Api {

    apiUrl = "http://localhost:8000";

    parseDjangoRestError(err) {
        let errorKey = "";
        let errorMsg = "";

        try {
            const response = err.response.data;
            errorKey = Object.keys(response)[0];
            const msg = response[errorKey][0];
            errorMsg = `${errorKey}: ${msg}`

        } catch {
            return errorMsg;
        }
        return errorMsg
    }

    buildErrorMsg(jsError, prefix="Error: ") {

        if (jsError.response) {
            return `${prefix} ${this.parseDjangoRestError(jsError)}`;
        }
        return `${jsError.toString()}`; // no prefix. very likely to be "Error: Network Error"
    }


    config() {
        return {
            headers: {}
        }
    };

    kittens = {

        create: (kittenData) => {
            return axios.post(
                `${this.apiUrl}/kittens/`,
                kittenData
            );
        },

        get: () => {
            if (MOCKUP === true) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(mockupKittens);
                    }, MOCKUP_LAG);
                })
            }

            const endPoint = `${this.apiUrl}/kittens/`;
            return axios.get(endPoint);
        }, // !get()

        delete: (kittenId) => {
            if (MOCKUP === true) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        mockupKittens = mockupKittens.filter(kitten => kitten.id !== kittenId);
                        resolve({statusCode: 200})
                    }, MOCKUP_LAG)
                });
            }
            return axios.delete(
                `${this.apiUrl}/kittens/${kittenId}`
            )
        } // !delete()

    } // !kittens
}

let Api = new _Api();

export {
    Api
}