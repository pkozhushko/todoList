import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { unSelect } from '../actions/index';
import logo from '../icons/main.png';
import '../css/header.css';

class Logo extends Component {
  render() {
    return (
      <div className='header__wrapper'>
        <img src={logo} onClick={() => this.props.unSelect()} className='header__logo' alt='logo'/>
        <p onClick={() => this.props.unSelect()} className='header__text'>Tasky</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.active
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    unSelect: unSelect
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Logo);
