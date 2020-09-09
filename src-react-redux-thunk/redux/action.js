/**
 * 
 */
import {INCREMENT, DECREMENT} from './action-types'

// 同步的 action 返回的是一个对象
// 异步的 action 返回的是一个函数

export const increment = (number) => ({type: INCREMENT, data: number})
export const decrement = (number) => ({type: DECREMENT, data: number})

// 异步 action 
export const incrementAsync = (number) => {
  return dispatch => {
    // 异步请求代码
    setTimeout(() => {
      // 分发 action
      dispatch(increment(number))
    }, 1000)
  }
}