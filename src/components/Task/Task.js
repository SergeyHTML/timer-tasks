import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Task.scss'
import {connect} from 'react-redux'
import {deleteTask, changeStatus, addTask, startTimer, currentTask} from '../../AC/index'

class Task extends Component {

  static propTypes = {
    tasks: PropTypes.object,
    deleteTask: PropTypes.func.isRequired,
    changeStatus: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired,
    startTimer: PropTypes.func.isRequired
  };

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  state = {
    play: false
  };

  render() {
    let {task} = this.props;

    return (
      <div className='task-row'>

        <div className='task-row__name'>{task.name}</div>
        <div className='task-row__status'>{task.status}</div>
        <div className='task-row__time'>{this.formatSeconds(task.time)}</div>

        { this.state.play ?
          <a href="#" onClick={this.handleStopTimer} >stop</a> :
          <a href="#" onClick={this.handleStartTimer} >start</a>}

        <a href="#" onClick={this.handleDelete}>delete</a>
        <a href="#" onClick={this.handleFinished}>finish</a>

      </div>
    )
  }

  handleDelete = ev => {
    ev.preventDefault();
    const {deleteTask, task} = this.props;
    deleteTask(task.id)
  };

  handleFinished = ev => {
    ev.preventDefault();
    const {changeStatus, currentTask, task} = this.props;
    changeStatus(task.id, 'finished');
    clearInterval(this.timer);
    currentTask(null);
    this.setState({ play: false });
  };

  handleStartTimer = ev => {
    ev.preventDefault();
    const {startTimer, changeStatus, currentTask, count, tasks, task} = this.props;
    if (task.status !== 'create') {
      return false;
    }

    if (count) {
      alert('Now running other task: ' + tasks.get(count).name);
      return false
    }

    currentTask(task.id);
    this.setState({
      play: true
    });

    changeStatus(task.id, 'in work');

    this.timer = setInterval(() => {
      task.status == 'create' ? startTimer(task.id, task.time) : ''
    }, 1000)
  };


  handleStopTimer = () => {
    const {changeStatus, currentTask, task} = this.props;
    clearInterval(this.timer);
    currentTask(null);
    changeStatus(task.id, 'create');
    this.setState({ play: false });
  };


  formatSeconds = (totalSeconds) => {
    let seconds = Math.floor((totalSeconds % (60)) );
    let minutes = Math.floor((totalSeconds % (60 * 60)) / (60));
    let hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));

    if (seconds < 10) {
      seconds = `0${seconds}`
    }

    if (minutes < 10) {
      minutes = `0${minutes}`
    }

    if (hours < 10) {
      hours = `0${hours}`
    }

    return `${hours}:${minutes}:${seconds}`
  }
}

function mapStateToProps(storeState) {
  return {
    count: storeState.counter,
    tasks: storeState.tasks
  }
}

export default connect( mapStateToProps, { deleteTask, changeStatus, addTask, startTimer, currentTask } )(Task)