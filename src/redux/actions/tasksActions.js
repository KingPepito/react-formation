import {
  SET_TASKS_LOADING,
  SET_TASKS,
  ADD_TASK,
  REPLACE_TASK,
  REMOVE_TASK,
} from "../actionTypes";
import {getFakeTodosPromise} from "../../helpers/getFakeTodosPromise";
import getGUID from "../../helpers/getGUID";
import * as notifications from "../../helpers/notificationTypes";
import {ERROR} from "../../helpers/notificationTypes";
import {notifyForTypeAndMessage} from "./notificationActions";

export const setTasksLoading = (isLoading) => ({
  type: SET_TASKS_LOADING,
  payload: {
    isLoading
  }
})

export const addTaskForTitle = title => ({
  type: ADD_TASK,
  payload: {
    newTask: {
      title,
      completed: false,
      id: getGUID(),
    },
  }
})

export const replaceTaskForIdAndValue = (idToReplace, newValue) => ({
  type: REPLACE_TASK,
  payload: {
    idToReplace,
    newValue
  }
})

export const removeTaskById = idToRemove => ({
  type: REMOVE_TASK,
  payload: {
    idToRemove,
  }
})

export const setTasks = (dataTasks) => ({
  type: SET_TASKS,
  payload: {
    tasks: [...dataTasks]
  },
  notification: {
    type: notifications.DEFAULT,
    message: "Tasks have correctly been loaded"
  }
})

export const clearTasks = () => ({
  type: SET_TASKS,
  payload: {
    tasks: []
  }
})

export const fetchTasks = () => (dispatch) => {
  dispatch(setTasksLoading(true))
  // Faking a API call to load tasks from a todoList
  getFakeTodosPromise()
    .then(response => {
      dispatch(setTasks(response.data))
      dispatch(setTasksLoading(false))
    })
    .catch(err => {
      dispatch(clearTasks())
      dispatch(setTasksLoading(false))
      dispatch(notifyForTypeAndMessage(ERROR, 'An error occured while loading your todos, please try again'))
    })
}

