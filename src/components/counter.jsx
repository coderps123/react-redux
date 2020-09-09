import React, { Component } from "react";
import { Button, Toast } from "antd-mobile";
import PropTypes from "prop-types"


export default class Counter extends Component {

  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired
  }

  toast = ()=> {
    Toast.loading('正在请求数据,请稍后')
  }

  increment = ()=> {
    // 1. 先获取选择框要添加的值
    const selectValue = this.select.value * 1
    // 更新
    this.props.increment(selectValue)
  }
  decrement = ()=> {
    // 1. 先获取选择框要添加的值
    const selectValue = this.select.value * 1
    // 更新
    this.props.decrement(selectValue)
  }
  incrementOfOdd = ()=> {
    // 1. 先获取选择框要添加的值
    const selectValue = this.select.value * 1
    const {count, increment} = this.props
    if (count % 2 === 1) {
      // 3. 更新count值
      increment(selectValue)
    }
  }
  incrementAsync = ()=> {
    // 1. 先获取选择框要添加的值
    const selectValue = this.select.value * 1
    // 发送异步请求
    this.props.incrementAsync(selectValue)
  }

  render() {
    const {count} = this.props
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

