import {ADD_TODO, SET_TASKS, SET_TASKS_LOADING, TOGGLE_TASK} from "../actionTypes";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    // You want to handle the action add, toggle and remove task here
    // case ADD_TASK: {
    //   return {
    //     ...state,
    //   };
    // }
    case TOGGLE_TASK: {
      const { id } = action.payload;
      return {
        ...state,
        tasks : state.tasks.map((t) => t.id === id ? { ...t, completed: !t.completed} : t)
      };
    }
    case SET_TASKS: {
      const { tasks } = action.payload;
      return {
        ...state,
        tasks
      };
    }
    case SET_TASKS_LOADING: {
      const { isLoading } = action.payload;
      return {
        ...state,
        isLoading
      };
    }
    default:
      return state;
  }
}
