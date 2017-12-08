import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TasksPage from './TasksPage'
import {Provider} from 'react-redux'

class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    return (
      <Provider store = {this.props.store}>
        <TasksPage/>
      </Provider>
    )
  }
}

export default Root