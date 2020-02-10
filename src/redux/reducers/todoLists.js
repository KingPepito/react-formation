import {SET_CURRENT_TODOS, SET_LISTS_TODOS} from "../actionTypes";

const initialState = {
  todos: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LISTS_TODOS: {
      return {
        ...state,
        todos: action.payload
      };
    }
    case SET_CURRENT_TODOS: {
      // const { id } = action.payload;
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
