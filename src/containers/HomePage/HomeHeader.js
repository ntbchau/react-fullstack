import React, { Component } from 'react';

import { connect } from 'react-redux';
import './HomeHeader.scss'
class HomeHeader extends Component {

    render() {


        return (
            <div className='home-header-conntainer'>
                <div className='home-header-content'>
                    <div className='left-content'>
                        <i className="fas fa-bars menu"></i>
                        <div className='header-logo'></div>
                    </div>
                    <div className='center-content'>

                        <div className='child-content'>
                            <div className='child-header'><b>Specialist</b></div>
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
                        <div className='flag'>
                            <b>Vn</b>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
