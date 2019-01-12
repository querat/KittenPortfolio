import React, {Component} from "react"
import {connect} from "react-redux"
import {actionGetKittens} from "../redux/kittenPage/actions";
import KittenTable from "./KittenTable";

class KittenPage extends Component {

    componentDidMount() {
        // load kittens from API as soon as the component is loaded
        this.props.getKittens();
    }

    render() {
        return (
            <div>
                <KittenTable/>
            </div>
        );
    }

}

export default connect(
    (state) => ({}),
    (dispatch) => ({
        getKittens: () => {
            dispatch(actionGetKittens());
        }
    })
)(KittenPage);
