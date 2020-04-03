import {
  SET_LISTS_TODOS,
} from "../actionTypes";

export const setListTodos = dataTodos => ({
  type: SET_LISTS_TODOS,
  payload: {
    ...dataTodos.data
  }
})