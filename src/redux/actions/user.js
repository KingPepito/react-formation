import { SET_USER } from "../actionTypes";


export const setUser = dataUser => ({
  type: SET_USER,
  payload: {
      ...dataUser.data
  }
})