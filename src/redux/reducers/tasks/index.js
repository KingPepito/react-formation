import {filter, map} from "lodash";
import {ADD_TASK, SET_TASKS, SET_TASKS_LOADING, REPLACE_TASK, REMOVE_TASK} from "../../actionTypes";

const initialState = {tasks: []};

export default function(state = initialState, action) {
  switch (action.type) {
    // You want to handle the action add, toggle and remove task here
    case ADD_TASK: {
      const {tasks} = state
      const {newTask} = action.payload
      return {
        ...state,
        tasks: [...tasks, newTask],
      };
    }
    case REPLACE_TASK: {
      const {tasks} = state
      const {idToReplace, newValue} = action.payload
      return {
        ...state,
        tasks: map(tasks, task => task.id === idToReplace ? newValue : task),
      };
    }
    case REMOVE_TASK: {
      const {tasks} = state
      const {idToRemove} = action.payload
      return {
        ...state,
        tasks: filter(tasks, task => task && task.id !== idToRemove),
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
