import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { select } from '../actions/index';
import Users from './Users';
import NewUser from './NewUser';
import Title from '../components/Title';
import Header from './Header';
import '../css/titlePage.css';

class TitlePage extends Component {
  constructor(){
    super();
    this.state = {
      newUser: false
    };
  }
  add = () => {
    this.setState({newUser: !this.state.newUser});
  }
  render() {

    if (  this.props.user ) {
      return ( null )
    } else if (  this.state.newUser  ){
      return(


            <div className='titlePage__wrapper'>
              <Header />
              <NewUser add={() => this.add()}/>
            </div>
        )
    } else {
      return(
        <div className='titlePage__wrapper'>
          <Title />
          <Users add={() => this.add()} />
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.active
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    select: select
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(TitlePage);
