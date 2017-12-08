import React, {Component} from 'react'
import TaskList from './TaskList'
import TaskForm from './TaskForm/index'

export default class TasksPage extends Component {
  render() {
    return(
      <div>
        <TaskForm/>
        <TaskList/>
      </div>
    )
  }
}