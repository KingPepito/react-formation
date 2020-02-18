import {applyMiddleware, createStore, compose} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from './reducers'
import {persistToken} from "./middleware";
import ReduxThunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
// Create store and bind redux devtools extension window var, compose the multiple middleware as applyMiddleware receive only one enhancer
export const store = createStore(persistedReducer, compose(
  applyMiddleware(ReduxThunk),
  applyMiddleware(persistToken),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
)
export const persistor = persistStore(store)