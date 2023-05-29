import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }
    toggle = () => {
        this.props.toggleParent();
    }


    render() {
        console.log(this.props)
        console.log(this.props.isOpen)
        return (

            <Modal
                isOpen={this.props.isOpen}
                toggle={() => this.toggle()}
                className={"modal-user-conntainer"}
                size="lg"
                centered
            >
                <ModalHeader toggle={() => this.toggle()}>Create New User</ModalHeader>
                <ModalBody>
                    <div className="modal-user-body">
                        <div className='input-container'>
                            <label>Email</label>
                            <input type="text" />
                        </div>
                        <div className='input-container'>
                            <label>Password</label>
                            <input type="password" />
                        </div>
                        <div className='input-container'>
                            <label>First Name</label>
                            <input type="text" />
                        </div>
                        <div className='input-container'>
                            <label>Last Name</label>
                            <input type="text" />
                        </div>
                        <div className='input-container max-width-input '>
                            <label>Address</label>
                            <input type="text" />
                        </div>

                    </div>


                </ModalBody>
                <ModalFooter>
                    <Button color="primary" className='px-3' onClick={() => this.toggle()}>
                        Save Change
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);





