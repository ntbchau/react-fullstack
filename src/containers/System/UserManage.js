import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import { getAllUsers, createNewUserService } from '../../services/userService';
import ModalUser from './ModalUser';
import autoMergeLevel1 from 'redux-persist/es/stateReconciler/autoMergeLevel1';
class UserManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModal: false,
        }
    }

    async componentDidMount() {
        await this.getAllUserFromReact();

    }

    getAllUserFromReact = async () => {
        let response = await getAllUsers('All');
        // console.log('get user', response);
        // console.log('code', response.data.errCode)
        if (response && response.data.errCode === 0) {

            this.setState({
                arrUsers: response.data.users
            })
            console.log('check state user', this.state.arrUsers);
            // 
        }

    }
    handleClickEdit = () => {
        alert('click me')
    }


    handleClickDelete = () => {
        alert('delete')
    }
    handleClickNewUser = () => {
        this.setState({
            isOpenModal: true
        })
    }
    createNewUser = async (data) => {
        try {
            let response = await createNewUserService(data);
            console.log('data', response)
            if (response && response.data.errCode !== 0) {
                alert(response.data.errMessage)
            } else {
                await this.getAllUserFromReact();
                this.setState({
                    isOpenModal: false
                })
            }
        } catch (e) {
            console.log(e)
        }

        //alert('please call me')
        console.log('data from child', data)

    }
    toggle = () => {
        this.setState({
            isOpenModal: !this.state.isOpenModal
        })
    }

    render() {
        console.log("render")
        let arrUsers = this.state.arrUsers;
        return (
            <div className="user-container">
                <div className='title text-center'>Manage users with Chau</div>
                <div className='mx-2'>
                    <button className='btn btn-primary px-3 '
                        onClick={() => this.handleClickNewUser()}
                    ><i className="fas fa-user-plus"></i> Add new users</button>
                    <ModalUser
                        isOpen={this.state.isOpenModal}
                        toggleParent={this.toggle}
                        createUser={this.createNewUser} />
                </div>
                <div className='user-table mt-3 mx-2'>


                    <table id="customers">

                        <tr>
                            <th>Email</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Address</th>
                            <th>Actions</th>
                        </tr>

                        {arrUsers && arrUsers.map((item, index) => {
                            return (
                                <tr>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <button className="btn-edit" onClick={() => this.handleClickEdit()}>
                                            <i className="fas fa-edit edit"></i>
                                        </button>
                                        <button className='btn-delete' onClick={() => this.handleClickDelete()}>
                                            <i className="fas fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}




                    </table>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
