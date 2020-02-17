import { combineReducers } from "redux";
import tasks from "./tasks";
import todoLists from "./todoLists";
import user from "./user";
import {LOG_OUT} from "../actionTypes";

const appReducer = combineReducers({ tasks, todoLists, user })

const rootReducer = (state, action) => {
  if (action.type === LOG_OUT) {
    state = undefined
  }
  return appReducer(state, action)
}

export default rootReducer

