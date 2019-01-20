import * as React from "react"
import ReactTable from "react-table"
import {connect} from "react-redux"
import * as RS from "reactstrap"
import * as F from "react-feather"

import {
    actionGetKittens,
    actionDeleteKitten,
    actionOpenCrudModal
} from "../redux/kittenPage/actions"

class KittenTable extends React.Component {

    // if the cell does not contain the filtered value, it will be excluded.
    defaultFilteringMethod(filter, row) {
        return row[filter.id].includes(filter.value);
    }

    columns = [{
        accessor: "name",
        Header: "Name",
        filterable: true,
        filterMethod: this.defaultFilteringMethod,
        sortable: true,
    }, {
        accessor: "breed",
        Header: "Breed",
        filterable: true,
        filterMethod: this.defaultFilteringMethod,
        sortable: true,
    }, {
        accessor: "null",
        Header: null,
        sortable: false,
        Cell: row => {
            return (
                <RS.ButtonGroup className={"float-right"}>
                    <RS.Button size={"sm"} color={"warning"}
                               onClick={() => {
                                   this.props.onEditClicked(row.original);
                               }}>
                        <F.Edit color={"black"}/>
                    </RS.Button>
                    <RS.Button size={"sm"} color={"danger"}
                               onClick={() => {
                                   this.props.onRemoveClicked(row.original);
                               }}>
                        <F.Delete color={"black"}/>
                    </RS.Button>
                </RS.ButtonGroup>
            )
        }
    }];

    render() {
        return (
            <div>
                <div className={"sticky-top bg-white"}>
                    <RS.ButtonGroup className={"float-right mb-1"}>
                        <RS.Button size={"sm"} color={"primary"}
                                   disabled={this.props.loading}
                                   onClick={this.props.onRefreshRequested}>
                            <F.RefreshCw color={"white"}/>
                        </RS.Button>
                        <RS.Button size={"sm"} color={"primary"}
                                   disabled={this.props.loading}
                                   onClick={this.props.onAddClicked}>
                            <F.Plus color={"white"}/>
                        </RS.Button>
                    </RS.ButtonGroup>
                    <div className={"clearfix"}/>
                </div>
                <ReactTable
                    columns={this.columns}
                    data={this.props.kittens}
                    loading={this.props.loading}
                    defaultPageSize={5}
                />
            </div>
        )

    }
}

export default connect(
    (state) => ({
        kittens: state.kittenPage.kittens,
        loading: state.kittenPage.loading,
    }),
    (dispatch) => ({
        onAddClicked: () => {
            console.log("Add clicked");
            dispatch(actionOpenCrudModal("ADDING", {}))
        },
        onRefreshRequested: () => {
            console.log("Refresh requested");
            dispatch(actionGetKittens());
        },
        onEditClicked: (row) => {
            console.log("Edit clicked.", row);
        },
        onRemoveClicked: (row) => {
            console.log("Remove clicked.", row);
            const kittenId = row.id;
            dispatch(actionDeleteKitten(kittenId));
        },

    })
)(KittenTable)