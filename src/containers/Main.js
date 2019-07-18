import React, { Component } from 'react';
import { connect } from 'react-redux';
import TitlePage from './TitlePage';
import UserPage from './UserPage';
import '../css/root.css';

class Main extends Component {
  render() {
    return (
      <div className='Main'>
        <TitlePage />
        <UserPage />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.active
  };
}

export default connect(mapStateToProps)(Main);
