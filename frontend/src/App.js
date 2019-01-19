// JS libraries imports
import React, {Component} from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom"
import {Provider} from "react-redux"

// My imports
import {store} from "./redux/store"
import KittenPage from "./KittenPage/KittenPage"
import {OtherPage} from "./OtherPage";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path={"/"} component={KittenPage}/>
                        <Route exact path={'/kittens'} component={KittenPage}/>
                        <Route exact path={'/otherpage'} component={OtherPage}/>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default App;
