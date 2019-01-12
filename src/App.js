// App stylesheets
import "bootstrap/dist/css/bootstrap.min.css"

// JS libraries imports
import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {Provider} from "react-redux"

// My imports
import {store} from "./redux/store"
import KittenPage from "./KittenPage/KittenPage"

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={"/"}/>
                        <Route exact path={'/kittens'} component={KittenPage}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
