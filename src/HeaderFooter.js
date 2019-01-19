import * as React from "react"
import * as RS from "reactstrap"
import * as F from "react-feather"
import {Link} from 'react-router-dom'

class HeaderFooter extends React.Component {

    navItems = [{
        name: "Kittens",
        href: "/kittens",
        icon: <F.User/>,
        active: false,
    }, {
        name: "Other Page",
        href: "/otherpage",
        icon: <F.HelpCircle/>,
        active: false,
    }].map((navItem) => {
        if (navItem.href === window.location.pathname) {
            navItem.active = true;
        }
        return navItem;
    });

    buildNavBar() {
        let tabs = this.navItems.map((navItem, index) =>
            <RS.NavItem key={index}>
                <RS.NavLink tag={Link} to={navItem.href} active={navItem.active}>
                    {navItem.icon}{navItem.name}
                </RS.NavLink>
            </RS.NavItem>
        );

        return (
            <RS.Nav tabs color={"light"}>
                {tabs}
            </RS.Nav>
        );

    }

    render() {
        return (
            <div className={"d-flex flex-column h-100 align-content-center"}>
                <div>
                    <div className={"p-1 pl-3"}>
                        <h1>Kitten webapp</h1>
                    </div>
                    {this.buildNavBar()}
                </div>

                <div className={"container d-flex flex-column h-100 mt-2 mb-1"}>
                    <RS.Card>
                        <RS.CardHeader className={"text-center "}>
                            {this.props.title}
                        </RS.CardHeader>
                        <div className={"m-2 overflow-auto"}>
                            {this.props.children}
                        </div>
                    </RS.Card>
                </div>

            </div>
        );
    }

}

export {HeaderFooter}