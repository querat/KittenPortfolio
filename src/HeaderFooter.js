import * as React from "react"
import * as RS from "reactstrap"

class HeaderFooter extends React.Component {

    navItems = [{
        name: "Kittens",
        href: "/kittens"
    }];

    render() {
        return (
            <div>
                <div>

                </div>

                <div className="container">
                    {this.props.children}
                </div>

                <div>

                </div>
            </div>
        );
    }

}

export {HeaderFooter}