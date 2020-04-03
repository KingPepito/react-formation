import {
  LOG_OUT,
  SET_USER,
  RECEIVE_TOKEN,
} from "../actionTypes";
import * as notifications from "../../helpers/notificationTypes";

export const setUser = dataUser => ({
  type: SET_USER,
  payload: {
    ...dataUser.data
  },
  notification: {
    type: notifications.VALIDATION,
    message: "You have been successfully connected!"
  }
})

export const setToken = token => ({
  type: RECEIVE_TOKEN,
  token
})

export const logout = () => {
  // Remove token saved in localstorage
  localStorage.removeItem('TOKEN')
  // Force user to reconnect
  window.location.reload()
  return {
    type: LOG_OUT,
  }
};