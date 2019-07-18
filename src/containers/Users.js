import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { select } from '../actions/index';
import '../css/users.css';

class Users extends Component {
  showUsers() {
    return this.props.users.map((user) => {
      return(
        <li className='users__user' onClick={() => this.props.select(user)} key={user.id}>{user.name} {user.surname}</li>
      )
    })
  }
  shouldComponentUpdate(nextProps) {
        return (nextProps.users !== this.props.users);
    }
  render() {
    return (
      <div className='users__wrapper'>
        <p className='users__header'>Виберіть користувача, або створіть нового:</p>
        <ul className='users__list'>
          {   this.showUsers()  }
        </ul>
        <button onClick={() => this.props.add()} className='users__btn'>Додати користувача  <i className='fas fa-user-plus icon'></i></button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    usersRoot: state.usersRoot
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    select: select
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Users);
