import React, { Component } from "react";
import { Button, Toast } from "antd-mobile";

import * as action from "../redux/action"

export default class App extends Component {

  toast = ()=> {
    Toast.loading('正在请求数据,请稍后')
    console.log(this);
  }

  increment = ()=> {
    // 1. 先获取选择框要添加的值
    const selectValue = this.select.value * 1
    // 更新
    this.props.store.dispatch(action.increment(selectValue))
  }
  decrement = ()=> {
    // 1. 先获取选择框要添加的值
    const selectValue = this.select.value * 1
    // 更新
    this.props.store.dispatch(action.decrement(selectValue))
  }
  incrementOfOdd = ()=> {
    // 1. 先获取选择框要添加的值
    const selectValue = this.select.value * 1
    const count = this.props.store.getState()
    if (count % 2 === 1) {
      // 3. 更新count值
      this.props.store.dispatch(action.increment(selectValue))
    }
  }
  incrementAsync = ()=> {
    // 1. 先获取选择框要添加的值
    const selectValue = this.select.value * 1
    setTimeout(() => {
      // 3. 更新count值
      this.props.store.dispatch(action.increment(selectValue))
    }, 1000)
  }

  render() {
    console.log(this.props);
    const count = this.props.store.getState()
    return (
      <div>
        <Button type="primary" onClick={this.toast}>App</Button>
        <div>count {count} click</div>
        <div>
          <select ref={select => this.select = select}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;
          <button onClick={this.incrementOfOdd}>incrementOfOdd</button>&nbsp;
          <button onClick={this.incrementAsync}>incrementAsync</button>
        </div>
      </div>
    );
  }
}
