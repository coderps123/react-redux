import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"

import {counter} from "./reducers"

// 生成一个 store 对象
const store = createStore(
  counter,
  applyMiddleware(thunk) // 应用上异步中间件
) // 内部会第一次调用 render 函数, 得到初始化 state

export default store