import { CURRENT_TASK, DELETE_TASK, CHANGE_STATUS, ADD_TASK, START_TIMER } from '../constants'

export function currentTask(id) {
  const action = {
    type: CURRENT_TASK,
    payload: {id}
  }
  return action
}

export function deleteTask(id) {
  return {
    type: DELETE_TASK,
    payload: {id}
  }
}

export function changeStatus(taskId, status) {
  return {
    type: CHANGE_STATUS,
    payload: {taskId, status}
  }
}

export function addTask( nameTask ) {
  return {
    type: ADD_TASK,
    payload: { nameTask },
    randomId: Date.now() + Math.random()
  }
}

export function startTimer( id, time ) {
  return {
    type: START_TIMER,
    payload: { id, time }
  }
}




