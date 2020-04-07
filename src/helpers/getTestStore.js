import {applyMiddleware, createStore} from 'redux'
import rootReducer from '../redux/reducers/index'
import {middlewares} from '../redux/configureStore'
// This helper provide an instance of a similar store used in the app.
export const getTestStore = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(rootReducer, initialState)
}