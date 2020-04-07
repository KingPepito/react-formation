import {getTestStore} from "../../../helpers/getTestStore";
import {fetchTodos} from "../todoListsActions";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

describe("Test that asynchronous action creators related to tasks are working correctly", () => {
  it('should update the state correctly after fetching tasks', () => {
    const expectedState = [
      {
        title: 'test1',
        completed: false,
        id: 'test-1-id'
      },
      {
        title: 'test2',
        completed: true,
        id: 'test-2-id'
      },
      {
        title: 'test3',
        completed: false,
        id: 'test-3-id'
      },
    ]

    const store = getTestStore()
    mock.onGet("https://reqres.in/api/todos").reply(200, {
        data:  expectedState,
      }
    );
    return store.dispatch(fetchTodos())
      .then(() => {
        const newState = store.getState()
        expect(newState.todoLists.todos).toEqual(expectedState)
      })
  })
})