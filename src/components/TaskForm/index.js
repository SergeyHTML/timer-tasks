import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addTask} from  '../../AC'

class TaskForm extends Component {
  static propTypes = {
    addTask: PropTypes.func.isRequired
  };

  state = {
    name: ''
  };

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        new task name: <input value = {this.state.name}
                     onChange = {this.handleChange()}/>

        <input disabled={this.getClassName()} type = "submit" value = "Add new task"/>
      </form>
    )
  }

  handleSubmit = ev => {
    ev.preventDefault();
    const { addTask, articleId } = this.props;
    addTask(this.state, articleId);
    this.setState({
      user: ''
    })
  };

  getClassName = type =>  this.state.name.length <= 0 ? 'disabled' : '';

  handleChange = type => ev => {
    const {value} = ev.target;
    this.setState({
      name: value
    })
  }
}

export default connect(null, {addTask})(TaskForm)