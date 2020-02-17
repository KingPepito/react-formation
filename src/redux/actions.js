import {LOG_OUT, SET_LISTS_TODOS, SET_USER, RECEIVE_TOKEN} from "./actionTypes";

export const setListTodos = dataTodos => {
  return {
    type: SET_LISTS_TODOS,
    payload: {
      ...dataTodos.data
    }
  }
};

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