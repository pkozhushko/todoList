import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { unSelect } from '../actions/index';
import Tasks from './Tasks';
import Header from './Header';
import '../css/userPage.css';
import male from '../icons/male.png';
import female from '../icons/female.png';


class UserPage extends Component {
  render() {
    if (!this.props.user) {
        return (null)
    }
    return (
      <div className='user'>
        <Header />
        <div className='user__info'>
          <div className='user-img__wrapper'>
            <div className='user-img__crop'>
              <img className='user-img'
                   src={this.props.user.photo ? this.props.user.photo :
                        this.props.user.sex === 'male' ? male : female} alt='avatar'/>
            </div>
          </div>
          <br/>
          <h3 className='user__info-name'>{this.props.user.name} {this.props.user.surname}</h3>
        </div>
        <Tasks />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    user: state.active
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    unSelect: unSelect
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserPage);
