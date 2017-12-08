import {combineReducers} from 'redux'
import counterReducer from './currentTask'
import tasks from './tasks'

export default combineReducers({
  counter: counterReducer,
  tasks
})