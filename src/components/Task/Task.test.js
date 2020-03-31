import React from 'react';
import Task from './';
import {renderWithTheme} from "../../helpers/renderWithTheme";
// We simply testing that our component Task is rendering here, snapshot testing might also include more features...
// Each time we run a snapshot test, it will create a snapshot files inside __snapshots__.
// Snapshot test will notify if the HTML produced by our component has been changes since the last time we run the test.
// If it is wanted that our changes will modify the HTML output, we shall update the tests by using 'yarn test -u'
describe("Task", () => {
  // "describe" is use to creates a block that groups together several related tests. It is not mandatory but can make the test more readable.
  test('Simply test if the component is rendering', () => {
    const component = renderWithTheme(<Task title="Hey I'm a test task!"/>);
    let tree = component.toJSON();
    // "expect" like "describe" is a function related to Jest, it might looks unintuitive but no need to import it here.
    // Jest will make sure when running that this kind of functions are imported
    expect(tree).toMatchSnapshot();
  });
})
