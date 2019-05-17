import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducer'
// import thunk from 'redux-thunk'
import TodoSagas from './sagas'
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = new createSagaMiddleware()
const store = createStore(  
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(TodoSagas)
export default store
