import {
  SET_LISTS_TODOS,
} from "../actionTypes";
import axios from "axios";

export const setListTodos = dataTodos => ({
  type: SET_LISTS_TODOS,
  payload: {
    list: dataTodos.data
  }
})
export const fetchTodos = () => async dispatch =>
  await axios.get("https://reqres.in/api/todos", {}).then(res => {
    dispatch(setListTodos(res.data))
  })