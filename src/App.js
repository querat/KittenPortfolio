import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {Provider} from "react-redux"

import {store} from "./redux/store"
import KittenPage from "./KittenPage/KittenPage"

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route component={KittenPage}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
