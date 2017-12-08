import React, {Component} from 'react'
import Task from './Task/Task'
import {connect} from 'react-redux'
import {mapToArr} from '../utils'

class TaskList extends Component {

  render() {
    const {tasks} = this.props;

    const elements = mapToArr(tasks).slice().reverse().map(task => <div key={task.id}>
      <Task task={task}/>
    </div>);

    return (
      <div>
        {elements}
      </div>
    )
  }
}

export default connect((state) => ({
  tasks: state.tasks
}))(TaskList)