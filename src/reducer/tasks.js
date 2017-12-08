import {tasks as defaultTasks} from '../data/tasks'
import {DELETE_TASK, CHANGE_STATUS, ADD_TASK, START_TIMER} from '../constants'
import {arrayToMap} from '../utils'
import {Map, Record} from 'immutable'

const TaskModel = Record({
  id: null,
  name: null,
  time: null,
  status: 'create',
});

const collection = new Map(arrayToMap(defaultTasks.map(task => new TaskModel(task))));

export default (tasks = collection, action) => {
  const {type, payload, randomId} = action;
  switch (type) {
    case DELETE_TASK:
      return tasks.delete(payload.id);
    case CHANGE_STATUS:
      return tasks.updateIn([payload.taskId, 'status'], value => payload.status);
    case ADD_TASK:
      return tasks.set(randomId, new TaskModel({
        id: randomId,
        ...payload.nameTask
      }));
    case START_TIMER:
      return tasks.updateIn([payload.id, 'time'], value => +value + 1);
  }

  return tasks
}