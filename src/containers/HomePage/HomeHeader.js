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
                                <div><FormattedMessage id='homeheader.find-doctor' /></div>
                            </div>
                            <div className='child-content'>
                                <div className='child-header'><b><FormattedMessage id='homeheader.Health-facilities' /></b></div>
                                <div><FormattedMessage id='homeheader.Choose-hospital-clinic' /></div>
                            </div>
                            <div className='child-content'>
                                <div className='child-header'><b><FormattedMessage id='homeheader.Doctor' /></b></div>
                                <div><FormattedMessage id='homeheader.Choose-a-good-doctor' /></div>
                            </div>
                            <div className='child-content'>
                                <div className='child-header'><b><FormattedMessage id='homeheader.Checkup-package' /></b></div>
                                <div><FormattedMessage id='homeheader.General-health-check' /></div>
                            </div>

                        </div>
                        <div className='right-content'>
                            <div className='support'><i class="fas fa-question-circle "></i><FormattedMessage id='homeheader.support' /> </div>
                            <div className='language-vi'>VN</div>
                            <div className='language-en'>EN</div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'><FormattedMessage id='homeheader.Medical-Platform' />

                        </div>
                        <div className='title2'><FormattedMessage id='homeheader.Comprehensive-healthcare' />

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
                                <div className='text-child'><FormattedMessage id='homeheader.Specialist-Examination' /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fas fa-mobile-alt"></i></div>
                                <div className='text-child'><FormattedMessage id='homeheader.Remote-Examination' /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fas fa-stethoscope"></i></div>
                                <div className='text-child'><FormattedMessage id='homeheader.General-Examination' /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fas fa-flask"></i></div>
                                <div className='text-child'><FormattedMessage id='homeheader.Medical-Test' /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fas fa-user-md"></i></div>
                                <div className='text-child'><FormattedMessage id='homeheader.Mental-Health' /></div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className="fas fa-briefcase-medical"></i></div>
                                <div className='text-child'><FormattedMessage id='homeheader.Dental-Examination' /></div>
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
