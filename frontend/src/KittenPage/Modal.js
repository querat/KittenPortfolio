import * as RS from 'reactstrap'
import * as React from 'react';
import {connect} from 'react-redux'
import {Form} from "reactstrap";
import {FormGroup} from "reactstrap";
import {Label} from "reactstrap";
import {Input} from "reactstrap";
import {Button} from "reactstrap";
import {ButtonGroup} from "reactstrap";
import {
    actionCloseCrudModal,
    actionHttpAddKitten,
    actionDeleteKitten,
    actionHttpEditKitten,

} from "../redux/kittenPage/actions";

const reduxConnected = connect(
    (state) => ({
        isCrudModalOpen: state.kittenPage.isCrudModalOpen,
        crudMode: state.kittenPage.crudMode,
        kittenBeingCrud: state.kittenPage.kittenBeingCrud,
        loading: state.kittenPage.loading
    }),
    (dispatch) => ({
        dismissModal: () => {
            console.log("dismissModal()");
            dispatch(actionCloseCrudModal());
        },

        sendAddKittenAction: (kittenData) => {
            console.log("add kitten query:", kittenData);
            dispatch(actionHttpAddKitten(kittenData));
        },

        sendEditKittenAction: (kittenData) => {
            console.log("edit kitten query:", kittenData);
            dispatch(actionHttpEditKitten(kittenData));
        },

        sendDeleteKittenAction: (kittenData) => {
            console.log("edit kitten query:", kittenData);
            dispatch(actionDeleteKitten(kittenData));
        },

    })
);

class _FormAddEdit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            kittenData: {...this.props.kittenBeingCrud}
        };

        // You'd think you wouldn't need to do this after so many years.
        // Fat arrow functions won't do.
        this.onSubmit = this.onSubmit.bind(this);
        this.onFormChange = this.onFormChange.bind(this)
    }

    onFormChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            kittenData: {
                ...this.state.kittenData,
                [name]: value
            }
        })
    };

    onSubmit = (evt) => {
        evt.preventDefault();

        if (this.props.loading) {
            console.log("not so fast !");
            return;
        }
        switch (this.props.crudMode) {
            case "ADDING":
                return this.props.sendAddKittenAction(this.state.kittenData);
            case "EDITING":
                return this.props.sendEditKittenAction(this.state.kittenData);
            case "DELETING":
                return this.props.sendDeleteKittenAction(this.state.kittenData);
            default:
                console.error(`Invalid kitten edition mode: ${this.props.crudMode}`);
        }

    };


    buildFormContent() {
        if (this.props.crudMode !== "EDITING" &&
            this.props.crudMode !== "ADDING") {
            return null;
        }
        return (
            <React.Fragment>
                <FormGroup onChange={this.onFormChange}>

                    <Label for={"kittenName"}>Name</Label>
                    <Input id={"kittenName"} name={"name"} placeholder={"name"}/>

                    <Label for={"kittenBreed"}>Breed</Label>
                    <Input id={"kittenBreed"} name={"breed"} placeholder={"breed"}/>
                </FormGroup>
            </React.Fragment>
        );

    }

    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                {this.buildFormContent()}

                <FormGroup>
                    <div className={"clearfix"}>
                        <Button
                            type="button"
                            onClick={this.props.dismissModal}
                            style={{width: "33%"}}
                            className={"float-left"}
                        >
                            Cancel
                        </Button>
                        {/* Implicit 1% space padding */}
                        <Button
                            type="submit"
                            disabled={this.props.loading}
                            className={"float-right"} color={"primary"}
                            style={{width: "66%"}}
                        >
                            OK
                        </Button>
                    </div>
                </FormGroup>
            </Form>
        );
    }
}

const FormAddEdit = reduxConnected(_FormAddEdit);

class Modal extends React.Component {

    buildTitle() {
        const kittenData = this.props.kittenBeingCrud;

        switch (this.props.crudMode) {
            case "EDITING":
                return `Editing kitten ${kittenData.name}`;
            case "ADDING":
                return "Adding a kitten";
            case "DELETING":
                return `Deleting kitten ${kittenData.name}`
            default:
                console.warn("invalid operation !");
                return "";
        }
    }

    render() {
        return (
            <RS.Modal isOpen={this.props.isCrudModalOpen}>
                <RS.ModalHeader>{this.buildTitle()}</RS.ModalHeader>
                <div className={"m-4"}>
                    <FormAddEdit/>
                </div>
            </RS.Modal>
        );
    }
}


Modal = reduxConnected(Modal);
export {
    Modal
}
