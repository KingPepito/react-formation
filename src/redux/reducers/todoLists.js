import {SET_LISTS_TODOS} from "../actionTypes";

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
    default:
      return state;
  }
}
