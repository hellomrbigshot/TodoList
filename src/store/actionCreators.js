import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODO_LIST, GET_INIT_LIST } from './actionTypes'
import axios from 'axios'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddTodoAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteTodoAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const initListAction = (data) => ({
  type: INIT_TODO_LIST,
  data
}) 

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/api/todolist')
      .then(res => {
        const list = res.data.list 
        const action = initListAction(list)
        dispatch(action)
      }).catch(e => {
        console.log('error')
      })
  }
}

export const getInitList = () => ({
  type: GET_INIT_LIST
})