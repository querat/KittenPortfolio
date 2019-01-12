import axios from "axios"

const MOCKUP = true;

const mockupKittens = [{
    id: 1,
    name: "Fluffy",
    breed: "Maine Coon"
}, {
    id: 2,
    name: "Drunky",
    breed: "Scottish Fold"
},{
    id:3,
    name:"Kitty",
    breed:"Tabby"
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
                    }, 1000);
                })
            }

            const endPoint = `${this.apiUrl}/images/search`;

            return axios.get(
                endPoint,
                this.config
            )

        }

    } // !kittens
}

let Api = new _Api();

export {
    Api
}