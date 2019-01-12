import * as React from "react"
import ReactTable from "react-table"
import {connect} from "react-redux"

import 'react-table/react-table.css'

class KittenTable extends React.Component {

    defaultFilteringMethod(filter, row){
        return row[filter.id].includes(filter.value);
    }

    columns = [{
        accessor: "name",
        Header: "Name",
        filterable: true,
        filterMethod:this.defaultFilteringMethod,
        sortable: true,
    }, {
        accessor: "breed",
        Header: "Breed",
        filterable: true,
        filterMethod:this.defaultFilteringMethod,
        sortable: true,
    }];

    render() {
        return (
            <ReactTable
                columns={this.columns}
                data={this.props.kittens}
                loading={this.props.loading}
            />
        )

    }
}

export default connect(
    (state) => ({
        kittens: state.kittenPage.kittens,
        loading: state.kittenPage.loading,
    }),
    (dispatch) => ({})
)(KittenTable)