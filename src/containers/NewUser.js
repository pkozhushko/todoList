import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addUser } from '../actions/index';
import '../css/newUser.css';

class NewUser extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name: '',
        surname: '',
        sex: 'male'
      };

      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeSurname = this.handleChangeSurname.bind(this);
      this.handleChangeSex = this.handleChangeSex.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
      this.setState({name: event.target.value});
    }

    handleChangeSurname(event) {
      this.setState({surname: event.target.value});
    }

    handleChangeSex(event) {
      this.setState({sex: event.target.value});
    }

    handleSubmit(event) {
      this.props.addUser(this.state.name, this.state.surname, this.state.sex);
      event.preventDefault();
      this.setState({
        name: '',
        surname: '',
        sex: 'male'
      });
      this.props.add();
    }

    render() {
      return (
        <div className='newUser__wrapper' >
          <button onClick={() => this.props.add()} className='newUser__btn'>Повернутись  <i className='fas fa-undo icon'></i></button>
          <form onSubmit={this.handleSubmit}>
            <label className='field__wrapper'>
              Ім'я:
              <input type='text' className='field' value={this.state.name} onChange={this.handleChangeName} maxLength='20' minLength='2' required />
            </label>
            <label className='field__wrapper'>
              Прізвище:
              <input type='text' className='field' value={this.state.surname} onChange={this.handleChangeSurname} maxLength='20' minLength='2' required />
            </label>
            <label className='field__wrapper'>
              Чоловік:
              <input type='radio' className='field radio' value='male' checked={this.state.sex === 'male'} onChange={this.handleChangeSex} />
              <span className='checkmark'></span>
            </label>
            <label className='field__wrapper'>
              Жінка:
              <input type='radio' className='field radio' value='female' checked={this.state.sex === 'female'} onChange={this.handleChangeSex} />
              <span className='checkmark'></span>
            </label>
            <input type='submit' className='newUser__btn' value='Додати користувача' />
          </form>
        </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    addUser: addUser
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(NewUser);
