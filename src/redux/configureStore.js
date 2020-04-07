import {applyMiddleware, createStore, compose} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import rootReducer from './reducers'
import {persistToken} from "./middleware";
import ReduxThunk from 'redux-thunk'
import {notify} from "./middleware/notifyMiddleware";

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
// List of middlewares used by the store
export const middlewares = [ReduxThunk, persistToken, notify]
// Create store and bind redux devtools extension window var, compose the multiple middleware as applyMiddleware receive only one enhancer
export const store = createStore(persistedReducer, compose(
  applyMiddleware(...middlewares),
  // Use devtools middleware conditionally as test are not run on a browser with the extension installed.
  ...(window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : [])
  )
)
export const persistor = persistStore(store)