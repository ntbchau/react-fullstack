
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";


import * as actions from "../../store/actions"
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';
import { userLoginSuccess } from '../../store/actions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isShowPassword: false,
            errMessage: ''
        }


    }
    handleChangeEmail = (event) => {
        this.setState({
            email: event.target.value

        })
        // console.log(event.target.value)

    }
    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
        // console.log(event.target.value)
    }
    handleClickLogin = async () => {
        // alert('Click me')
        //console.log('email:', this.state.email, 'password: ', this.state.password)

        // console.log('username: ' + this.state.username)
        // console.log('password: ' + this.state.password)

        this.setState({
            errMessage: ''
        })
        try {
            let data = await handleLoginApi(this.state.email, this.state.password);
            console.log('a', data)
            //console.log('b', data.data)
            //console.log('c', data.response.data)
            console.log(data.data.errCode)
            if (data && data.data.errCode !== 0) {

                this.setState({
                    errMessage: data.data.message
                })
            }
            if (data && data.data.errCode === 0) {
                this.props.userLoginSuccess(data.data.user)
                console.log('login succeed')
            }


        } catch (e) {
            if (e.response) {
                if (e.response.data) {
                    this.setState({
                        errMessage: e.response.data.message
                    })
                }
            }
            console.log('chau', e.response);

        }

    }
    handleClickEye = () => {
        // alert('see password')
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }




    render() {


        return (
            <>
                <div className='login-background'>Hello Login from Chau
                    <div className='login-container'>
                        <div className='login-content row'>
                            <div className='col-12 text-login'>Login</div>
                            <div className='col-12 form-group login-input'>
                                <label>Email: </label>
                                <input type='text' className='form-control' placeholder='Enter your username'
                                    value={this.state.email}
                                    onChange={(event) => this.handleChangeEmail(event)} />
                            </div>
                            <div className='col-12 form-group login-input'>
                                <label>Password: </label>
                                <div className='custom-password'>

                                    <input type={this.state.isShowPassword ? 'text' : 'password'} className='form-control' placeholder='Enter your password'
                                        value={this.state.password}
                                        onChange={(event) => this.handleChangePassword(event)} />
                                    <span onClick={() => this.handleClickEye()}>

                                        <i className={this.state.isShowPassword ? "fas fa-eye eye" : "fas fa-eye-slash eyeless"}> </i></span>

                                </div>

                            </div>
                            <div className='col-12' style={{ color: 'red' }}>
                                {this.state.errMessage}
                            </div>
                            <div className='col-12 '>
                                <button className='btn-login'
                                    onClick={() => this.handleClickLogin()}>Log in</button>
                            </div>

                            <div className='col-12'>
                                <span className='forgot-password'>Forgot your password?</span>
                            </div>
                            <div className='col-12 text-center mt-3'>
                                <span className='text-other-login'>Or Login with </span>
                            </div>
                            <div className='col-12 social-login'>
                                <i className="fab fa-google-plus-g google"></i>
                                <i className="fab fa-facebook-f facebook"></i>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),

        userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
