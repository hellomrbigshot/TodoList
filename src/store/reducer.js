import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODO_LIST } from './actionTypes'
const defaultState = {
  inputValue: 'hello world',
  list: [1, 2, 3]
}

// reducer 可以接受 state，但是不能修改 state
export default (state = defaultState, action) => {
  // console.log(state, action)
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  if (action.type === INIT_TODO_LIST) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data 
    return newState
  }
  return state
}