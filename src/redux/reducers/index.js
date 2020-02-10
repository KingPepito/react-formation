import { combineReducers } from "redux";
import tasks from "./tasks";
import todoLists from "./todoLists";
import user from "./user";

export default combineReducers({ tasks, todoLists, user });
