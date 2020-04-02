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
} from "./actionTypes";
import {getFakeTodosPromise} from "../helpers/getFakeTodosPromise";
import getGUID from "../helpers/getGUID";

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
  }
})

export const clearTasks = () => ({
  type: SET_TASKS,
  payload: {
    tasks: []
  }
})

export const fetchTasks = () => {
  return function (dispatch){
    dispatch(setTasksLoading(true))
    // Faking a API call to load tasks from a todoList
    getFakeTodosPromise()
      .then(response => {
        dispatch(setTasks(response.data))
        dispatch(setTasksLoading(false))
      })
      .catch(err => {
        dispatch(clearTasks())
        alert(err)
        dispatch(setTasksLoading(false))
        // Todo: HERE handle notify error
      })
  }
}

export const setUser = dataUser => {
  return {
    type: SET_USER,
    payload: {
      ...dataUser.data
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