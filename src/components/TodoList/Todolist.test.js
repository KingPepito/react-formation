// React Testing App is a testing library performing test the same way as an user would do
import React from "react";
import {fireEvent, render} from "@testing-library/react";
import {Provider} from "react-redux";
import {forEach} from "lodash";
import {wrapWithThemeProvider} from "../../helpers/renderWithTheme";
import TodoList from "./index";
import {getTestStore} from "../../helpers/getTestStore";
import {setTasks} from "../../redux/actions/tasksActions";
// @testing-library/react is a lib that provides a querying system for nodes that reproduce how users would find them.
describe("Todolist DOM testing with React Testing App.", () => {
  const dataTest = [
    {
      title: 'Test1',
      completed: false,
      id: 'sppp'
    },
    {
      title: 'Test2',
      completed: false,
      id: 'zsp'
    },
    {
      title: 'Test3',
      completed: false,
      id: 'fsd'
    }
  ]
  // Before each test, fill teh tasks store with some test data
  let testStore, todolist
  beforeEach(() => {
    testStore = getTestStore()
    // Persist the sample data to the store
    testStore.dispatch(setTasks(dataTest))
    todolist = render(wrapWithThemeProvider(
      <Provider store={testStore}>
        <TodoList fetchSample={false}/>
      </Provider>
      )
    )
  })

  it('should display the tasks from the store', () => {
    // The user might look the screen and check if all list element are display
    forEach(dataTest, task => expect(todolist.getByText(task.title)))
  })

  it('should create a new task when using the input', () => {
    const newTaskTitle = 'My new task'
    // The user might enter a new task title inside the input then press enter
    const inputNewTask = todolist.getByPlaceholderText('Add a new task')
    // "query"ByText instead of "get"ByText will not throw an error if no node is found
    expect(todolist.queryByText(newTaskTitle)).toBeFalsy()
    // The user can check if the task is correctly rendered
    fireEvent.change(inputNewTask, { target: { value: newTaskTitle } })
    fireEvent.keyDown(inputNewTask, { key: 'Enter', code: 'Enter' })
    expect(todolist.getByText(newTaskTitle))
  })

  it('should remove the title when clicking on the remove task', () => {
    // The user might look for the remove button then remove one of the task
    const removeButtons = todolist.getAllByText('X')
    // The user might want to remove the first task and check if the list is correctly updated
    fireEvent.click(removeButtons[0])
    expect(todolist.queryByText(dataTest[0].title)).toBeFalsy()
    expect(todolist.queryByText(dataTest[1].title))
    expect(todolist.queryByText(dataTest[2].title))
    // Then he might try to remove another
    fireEvent.click(removeButtons[2])
    expect(todolist.queryByText(dataTest[0].title)).toBeFalsy()
    expect(todolist.queryByText(dataTest[1].title))
    expect(todolist.queryByText(dataTest[2].title)).toBeFalsy()
  })

  it('should remove all the task when click on clear button', () => {
    // The user might look for the remove button then remove one of the task
    const clearButton = todolist.getByText('Clear')
    // The user might want to check if the list is correctly render
    forEach(dataTest, task => expect(todolist.getByText(task.title)))
    // Then he might try to clear the list and check if it is empty
    fireEvent.click(clearButton)
    forEach(dataTest, task => expect(todolist.queryByText(task.title)).toBeFalsy)
  })
})