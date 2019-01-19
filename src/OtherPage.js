import React, {Component} from "react"
import {connect} from "react-redux"

import {HeaderFooter} from "./HeaderFooter";

class OtherPage extends Component {

    render() {
        return (
            <HeaderFooter title={"Other Page"}>
                <div>other page</div>
            </HeaderFooter>
        );
    }

}

export {
    OtherPage
}