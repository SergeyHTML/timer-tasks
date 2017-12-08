import {CURRENT_TASK} from '../constants'

export default (number = null, action) => {
  const {type, payload} = action;
  return type == CURRENT_TASK ? payload.id : number;
}