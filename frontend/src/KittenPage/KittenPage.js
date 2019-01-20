import React, {Component} from "react"
import {connect} from "react-redux"

import {HeaderFooter} from "../HeaderFooter";
import KittenTable from "./KittenTable";
import {actionGetKittens} from "../redux/kittenPage/actions";
import {Modal} from "./Modal";

class KittenPage extends Component {

    componentDidMount() {
        // load kittens from API as soon as the component is loaded
        this.props.getKittens();
    }

    render() {
        return (
            <HeaderFooter title={"Kittens"}>
                <Modal/>
                <KittenTable/>
            </HeaderFooter>
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
