import React, { Component } from 'react';

import { connect } from 'react-redux';
import './HomeHeader.scss'
import logo from '../../assets/logo.svg';
import { FormattedMessage } from 'react-intl';
class HomeHeader extends Component {

    render() {


        return (
            <>
                <div className='home-header-conntainer'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className="fas fa-bars "></i>
                            <img className='header-logo' src={logo} />
                            <div className='header-logo'></div>
                        </div>
                        <div className='center-content'>

                            <div className='child-content'>
                                <div className='child-header'><b><FormattedMessage id='homeheader.speciality' /></b></div>
                                <div>Find a doctor by specialist</div>
                            </div>
                            <div className='child-content'>
                                <div className='child-header'><b>Health facilities</b></div>
                                <div>Choose hospital clinic</div>
                            </div>
                            <div className='child-content'>
                                <div className='child-header'><b>Doctor</b></div>
                                <div>Choose a good doctor</div>
                            </div>
                            <div className='child-content'>
                                <div className='child-header'><b>Checkup package</b></div>
                                <div>General health check</div>
                            </div>

                        </div>
                        <div className='right-content'>
                            <div className='support'><i class="fas fa-question-circle "></i> Support</div>
                            <div className='language-vi'>VN</div>
                            <div className='language-en'>EN</div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'> Medical Platform

                        </div>
                        <div className='title2'> Comprehensive healthcare

                        </div>
                        <div className='search'>
                            <i className="fas fa-search"></i>
                            <input type='text' placeholder='Find specialty' />

                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='option'>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fas fa-hospital-alt"></i></div>
                                <div className='text-child'>Specialist Examination</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fas fa-mobile-alt"></i></div>
                                <div className='text-child'>Remote Examination</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fas fa-stethoscope"></i></div>
                                <div className='text-child'>General Examination</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fas fa-flask"></i></div>
                                <div className='text-child'>Medical Test</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fas fa-user-md"></i></div>
                                <div className='text-child'>Mental Health</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fas fa-briefcase-medical"></i></div>
                                <div className='text-child'>Dental Examination</div>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        lang: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
