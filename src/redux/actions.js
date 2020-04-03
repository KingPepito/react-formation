import {
  LOG_OUT,
  SET_LISTS_TODOS,
  SET_USER,
  RECEIVE_TOKEN,
  SET_TASKS_LOADING,
  SET_TASKS,
  ADD_TASK,
  REPLACE_TASK,
  REMOVE_TASK,
  SET_NOTIFICATION,
  CLEAR_NOTIFICATION,
} from "./actionTypes";
import {getFakeTodosPromise} from "../helpers/getFakeTodosPromise";
import getGUID from "../helpers/getGUID";
import * as notifications from "../helpers/notificationTypes";
import {find} from "lodash";
import {NotificationTypes} from "../helpers/notificationTypes";
import {ERROR} from "../helpers/notificationTypes";

export const setListTodos = dataTodos => {
  return {
    type: SET_LISTS_TODOS,
    payload: {
      ...dataTodos.data
    }
  }
};

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

export const notifyForTypeAndMessage = (type, message) => (dispatch) => {
  const {color} = find(NotificationTypes, el => el.type === type)
  dispatch({
    type: SET_NOTIFICATION,
    payload: {
      color,
      message,
      type,
    }
  })

  setTimeout(() => dispatch(clearNotification()), 3000)
}

export const clearNotification = () => ({
  type: CLEAR_NOTIFICATION,
})

export const clearTasks = () => ({
  type: SET_TASKS,
  payload: {
    tasks: []
  }
})

export const fetchTasks = () => {
  return function (dispatch) {
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
}

export const setUser = dataUser => {
  return {
    type: SET_USER,
    payload: {
      ...dataUser.data
    },
    notification: {
      type: notifications.VALIDATION,
      message: "You have been successfully connected!"
    }
  }
};

export const setToken = token => {
  return {
    type: RECEIVE_TOKEN,
    token
  }
};

export const logout = () => {
  // Remove token saved in localstorage
  localStorage.removeItem('TOKEN')
  // Force user to reconnect
  window.location.reload()
  return {
    type: LOG_OUT,
  }
};