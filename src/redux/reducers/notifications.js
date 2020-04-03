import {CLEAR_NOTIFICATION, SET_NOTIFICATION} from "../actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_NOTIFICATION: {
      const {payload} = action
      return {
        ...state,
        ...payload
      };
    }
    case CLEAR_NOTIFICATION: {
      return initialState
    }
    default:
      return state;
  }
}
