import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers/index.js'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
export default createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(mySaga)