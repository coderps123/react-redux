/**
 * 包含 n 个reducer函数
 */
import {INCREMENT, DECREMENT} from './action-types.js'

export function counter(state = 0, action) {

  console.log(state, action);
  switch(action.type) {
    case INCREMENT: 
      return state + action.data
    case DECREMENT: 
      return state - action.data
    default: 
      return state
  }
}