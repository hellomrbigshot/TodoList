import React, { Component } from 'react'
// import TodoItem from './TodoItem'
import store from './store'
import { connect } from 'react-redux'
import TodoListUI from './TodoListUI'
import { getAddTodoAction, getInputChangeAction, getDeleteTodoAction, getInitList } from './store/actionCreators'
// import './style.css'

// const axios = require('axios')
class TodoList extends Component {
  // constructor(props) {
  //   super(props)
  //   store.subscribe(this.props.handleStoreChange)
  // }
  render() {
    const { inputValue, list, handleInputChange, handleBtnClick, handleItemDelete } = this.props
    return (
      <TodoListUI
        inputValue={inputValue}
        list={list}
        handleInputChange={handleInputChange}
        handleBtnClick={handleBtnClick}
        handleItemDelete={handleItemDelete}
      />
    )
  }
  getTodoItem() {
    return this.props.list.map((todo, i) => {
      // return (
        // <TodoItem 
        //   todo={todo} 
        //   key={i}
        //   index={i}
        //   deleteItem={this.handleItemDelete}
        // />
        // <li 
        //   key={i}
        //   onClick={this.handleItemDelete.bind(this, i)}
        //   dangerouslySetInnerHTML={{__html: todo}}
        // >
        //   {/* {todo} */}
        // </li>
      // )
    })
  }
  componentDidMount() {
    // const action = getTodoList()
    const action = getInitList()
    store.dispatch(action)
  }
}
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = getInputChangeAction(e.target.value)
      dispatch(action)
    },
    handleItemDelete(index) {
      // const list = [...this.state.list]
      // list.splice(index, 1)
      // this.setState((prevState) =>  {
      //   let list = [...prevState.list]
      //   list.splice(index, 1)
      //   return { list }
      // })
      // this.setState({
      //   list: list
      // })
      const action = getDeleteTodoAction(index)
      dispatch(action)
    },
    handleBtnClick() {
      // this.setState((prevState) => ({ 
      //   list: [prevState.inputValue, ...prevState.list]
      // }), () => {
      //   console.log(this.ul.querySelectorAll('div').length)
      // })
      // this.setState({
      //   list: [this.state.inputValue, ...this.state.list]
      // })
      const action = getAddTodoAction()
      dispatch(action)
    },
    // handleStoreChange() {
    //   this.setState(store.getState())
    // }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)