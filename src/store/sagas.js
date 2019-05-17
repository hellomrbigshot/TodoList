import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreators'
import axios from 'axios'

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList)
}

function* getInitList() {
  try {
    const res = yield axios.get('/api/todolist')
    const data = res.data.list
    const action = initListAction(data)
    yield put(action)
  } catch (e) {
    console.log('网络请求失败')
  }
}
export default mySaga