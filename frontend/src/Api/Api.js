import axios from "axios"

const MOCKUP = true;
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

    apiUrl = "https://api.thecatapi.com/v1";
    apiUserId = "pxtkqi";
    apiKey = "248b0c67-186d-4e93-ba35-38ba34743dc3";
    apiHeaderName = "x-api-key";

    config() {
        return {
            headers: {
                "x-api-key": this.apiKey
            }
        }
    };

    kittens = {

        get: () => {
            if (MOCKUP === true) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(mockupKittens);
                    }, MOCKUP_LAG);
                })
            }

            const endPoint = `${this.apiUrl}/images/search`;

            return axios.get(
                endPoint,
                this.config
            )

        }, // !get()

        delete: (kittenId) => {
            if (MOCKUP === true) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        mockupKittens = mockupKittens.filter(kitten => kitten.id !== kittenId);
                        resolve({statusCode:200})
                    }, MOCKUP_LAG)
                });
            }
            // return axios.delete(todo)
        } // !delete()

    } // !kittens
}

let Api = new _Api();

export {
    Api
}