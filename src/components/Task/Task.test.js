import React from 'react';
import {renderWithTheme} from "../../helpers/renderWithTheme";
import {shallow} from "enzyme";
import TaskTitle from "./styles/TaskTitle";
// Here we using a class version of Task. It is because Enzyme does not support manipulation of hooks yet.
// It might be a serious problem to consider when choosing the utilities lib for your React app.
import TaskClass from "./TaskClass";


// We simply testing that our component Task is rendering here, snapshot testing might also include more features...
// Each time we run a snapshot test, it will create a snapshot files inside __snapshots__.
// Snapshot test will notify if the HTML produced by our component has been changes since the last time we run the test.
// If it is wanted that our changes will modify the HTML output, we shall update the tests by using 'yarn test -u'.
describe("Task snapshot test.", () => {
  // "describe" is use to creates a block that groups together several related tests. It is not mandatory but can make the test more readable.
  // "test" is used to assert that the function passed as argument is executed correctly, first arg is describing the test.
  test('Simply test if the component is rendering', () => {
    const component = renderWithTheme(setupTask({title:"Hey I'm a test task!"}));
    let tree = component.toJSON();
    // "expect" like "describe" is a function related to Jest, it might looks unintuitive but no need to import it here.
    // Jest will make sure when running that this kind of functions are imported.
    expect(tree).toMatchSnapshot();
  });
})
// "shallow" is provided by Enzyme, it renders only the single component, not including its children.
// This is useful to isolate the component for pure unit testing.
const setupTask = (props = {}) => shallow(<TaskClass {...props}/>)

describe("Task DOM testing with Enzyme.", () => {
  let componentToTest
  const title = "Hey I'm a second test task!"
  // "beforeEach" is a function that Jest will run before each test of the current block.
  beforeEach(() => {
    // Initialize the Task component with some props.
    componentToTest = setupTask({title})
  })
  // "it" is a alias for "test" function, it allows us to read the test call as "it should render a remove button".
  // Here we assume that the remove button is a really important Task component's feature and its presence need to be test.
  it('should render a remove button', () => {
    // This will prove that our Task component contains a Button.
    expect(componentToTest.find('button'))
    // But we might want to be more specific by using a custom attribute to identify the node we are looking for.
    expect(componentToTest.find("[data-test='remove-button-task-test']"))
  })
  it('should render a title with the expected text', () => {
    // We might find an imported sub-component like this:
    const titleCompo = componentToTest.find(TaskTitle);
    expect(titleCompo)
    expect(titleCompo.text()).toContain(title)
    expect(titleCompo.text()).not.toContain('what ever text not expected')
  })
  // Enzyme allow us to test the complex implementation related to the React component's instance. Such as the state.
  it('should switch the "completed" state when clicking on the Task', () => {
    // Check the default state of "completed"
    expect(componentToTest.state('completed')).toEqual(false)
    // We might simulate a click event
    componentToTest.find(TaskTitle).simulate('click');
    // Check if the "completed" state is correctly updated
    expect(componentToTest.state('completed')).toEqual(true)
    componentToTest.find(TaskTitle).simulate('click');
    expect(componentToTest.state('completed')).toEqual(false)

  })
})