import {SET_USER} from "../actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        currentUser: action.payload
      };
    }
    default:
      return state;
  }
}
