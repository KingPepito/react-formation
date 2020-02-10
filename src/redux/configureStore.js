import {applyMiddleware, createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './reducers'
import {persistToken} from "./middleware";

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
// Create store and bind redux devtools extension window var
export const store = createStore(persistedReducer, applyMiddleware(persistToken))
export const persistor = persistStore(store)