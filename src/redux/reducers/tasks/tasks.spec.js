import {ADD_TASK, REMOVE_TASK, REPLACE_TASK} from "../../actionTypes";
import tasksReducer from "./";

describe("Test of Tasks reducer.", () => {
  // Use a new task generator for our test
  const getNewTask = (id = "my-test-id") => ({
    title: 'my test',
    completed: false,
    id,
  })
  const newTask = getNewTask(),
    newTask2 = getNewTask('task-to-delete'),
    newTask3 = getNewTask('task-to-be-replaced'),
    newTask4 = getNewTask('task-to-replace')

  let state = undefined

  it('should return default state', () => {
    expect(tasksReducer(state, {})).toEqual({tasks: []})
  })

  it('should return an array of task with our new task', () => {
    state = tasksReducer(undefined, {
      type: ADD_TASK,
      payload: {
        newTask
      }
    })
    expect(state).toEqual({tasks: [newTask]})
  })

  it('should be possible to insert several tasks', () => {
    state = tasksReducer(state, {
      type: ADD_TASK,
      payload: {
        newTask: newTask2
      }
    })
    expect(state).toEqual({tasks: [newTask, newTask2]})
    state = tasksReducer(state, {
      type: ADD_TASK,
      payload: {
        newTask: newTask3
      }
    })
    expect(state).toEqual({tasks: [newTask, newTask2, newTask3]})
  })

  it('should remove a specific task', () => {
    state = tasksReducer(state, {
      type: REMOVE_TASK,
      payload: {
        idToRemove: newTask2.id
      }
    })
    expect(state).toEqual({tasks: [newTask, newTask3]})
  })

  it('should replace a specific task by a new one', () => {
    state = tasksReducer(state, {
      type: REPLACE_TASK,
      payload: {
        idToReplace: newTask3.id,
        newValue: newTask4,
      }
    })
    expect(state).toEqual({tasks: [newTask, newTask4]})
  })
})