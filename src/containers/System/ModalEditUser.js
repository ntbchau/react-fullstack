import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//import { emitter } from '../../utils/emitter';
import _ from 'lodash';

class ModalEditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: ''
        }

    }


    componentDidMount() {
        let user = this.props.currUser;
        //let {currUser}=this.props;
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.address
            })
        }
        console.log('did mount edit', this.props.currUser)
    }
    toggle = () => {
        this.props.toggleParent();
    }
    handleChangeInput = (event, id) => {
        let copyState = this.state;
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        }, () => {
            console.log("check state:", this.state)
        })

    }
    checkValidateInput = () => {
        let isValid = true;
        let arrInput = ['firstName', 'lastName', 'address'];
        //console.log(arrInput.length)
        for (let i = 1; i < arrInput.length; i++) {
            //console.log(arrInput[i])
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Mising parameter: ' + arrInput[i]);
                break;
            }
        } return isValid;
    }
    handleCLickSaveChanges = () => {
        let isValid = this.checkValidateInput();
        if (isValid === true) {
            //call api edit user
            this.props.editUser(this.state);
            //console.log('data modal:', this.state)
        }


    }


    render() {
        //console.log(this.props)
        console.log(this.props.isOpen)
        console.log('check user from parennt', this.props)
        return (

            <Modal
                isOpen={this.props.isOpen}
                toggle={() => this.toggle()}
                className={"modal-user-conntainer"}
                size="lg"
                centered
            >
                <ModalHeader toggle={() => this.toggle()}>Edit User</ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        {/* <div className='input-container'>
                            <label>Email</label>
                            <input
                                onChange={(event) => this.handleChangeInput(event, "email")}
                                type="text"
                                value={this.state.email} />
                        </div> */}
                        {/* <div className='input-container'>
                            <label>Password</label>
                            <input
                                onChange={(event) => this.handleChangeInput(event, "password")}
                                type="password"
                                value={this.state.password} />
                        </div> */}
                        <div className='input-container'>
                            <label>First Name</label>
                            <input onChange={(event) => this.handleChangeInput(event, "firstName")}
                                type="text"
                                value={this.state.firstName} />
                        </div>
                        <div className='input-container'>
                            <label>Last Name</label>
                            <input onChange={(event) => this.handleChangeInput(event, "lastName")}
                                type="text"
                                value={this.state.lastName} />
                        </div>
                        <div className='input-container max-width-input '>
                            <label>Address</label>
                            <input onChange={(event) => this.handleChangeInput(event, "address")}
                                type="text"
                                value={this.state.address} />
                        </div>

                    </div>


                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-3' onClick={() => this.handleCLickSaveChanges()}>
                        Save Changes
                    </Button>{' '}
                    <Button color="secondary" className='px-3' onClick={() => this.toggle()}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);





