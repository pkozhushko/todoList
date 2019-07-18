import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTask, deleteTask, completeTask, editState, editTask } from '../actions/index';
import '../css/tasks.css';


class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
    this.handleEditing = this.handleEditing.bind(this);
  }

  handleEditing = () => {
    this.setState({editing: !this.state.editing});
  }

  edit = (e) => {
    const str = this.refs.editTask.value;
    if (/\S/.test(str)) {
      this.props.editTask(str, e);
    }
  }

 add = () => {
   const str = this.refs.addTask.value;
   if (/\S/.test(str)) {
     this.props.addTask(str, this.props.user.id);
   }
   this.refs.addTask.value = '';
 }

  showTasks() {
    return this.props.tasks.map((task, i) => {
      if (!task.edit) {
        return(
          <li key={i} title='Done?' className='task__wrapper'>
            <span className='task__number'>{i+1}</span>
            <span className={task.complete ? 'task__text complete' : 'task__text'}>{task.name}</span>
              <button
                onClick={() => { this.handleEditing(); this.props.editState(i); }}
                disabled={this.state.editing}
                title='Change'
                className='btn'>
                <i className='fas fa-pencil-alt btn__icon edit'></i>
              </button>
              <button
                onClick={() => this.props.deleteTask(i)}
                title='Delete'
                className='btn'>
                <i className='far fa-trash-alt btn__icon delete'></i>
              </button>
              <button
                onClick={() => this.props.completeTask(i)}
                title='Done'
                className='btn'>
                  <i className='fas fa-check btn__icon success'></i>
              </button>
          </li>
        );
      } else {
        return(
          <li key={i} className='task__wrapper'>
            <input ref='editTask' id={i} className='task__text editTask' defaultValue={task.name} maxLength='40' ></input>
            <button onClick={() => { this.edit(i); this.handleEditing(); }} className='btn'><i className='fas fa-check btn__icon success'></i></button>
          </li>
        );
      }

    })
  }

  render() {
    if (!this.props.user) {
        return (null)
    }
    return (
        <div className='tasks__wrapper'>
          <h3 className='tasks__header'>Список справ:</h3>
          <ul>
            {this.showTasks()}
          </ul>
          <div className='task__wrapper'>
            <input ref='addTask' className='task__text newTask' maxLength='40'></input>
            <button onClick={this.add} className='btn'><i className='fas fa-plus btn__icon edit'></i></button>
          </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.active,
    tasks: state.tasks
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    addTask: addTask,
    deleteTask: deleteTask,
    completeTask: completeTask,
    editState: editState,
    editTask: editTask
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Tasks);
