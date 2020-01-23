import React, {useEffect, useState} from "react";
import TaskContainer from "./styles/TaskContainer";
import TaskTitle from "./styles/TaskTitle";

const Task = ({complete, completed, id, title, remove}) => {
  const removeSelf = () => remove(id)
  const completeSelf = () => complete(id)

  // Function passed to useState will be executed before the first render, initializing the first state of the component
  // Equivalent to the constructor class lifecycle function
  const [someState, setSomeState] = useState(() => {
    console.log('Before first render. Initializing the state')
  });
  // The function will be executed once just after the component mount, equivalent to componentDidMount
  useEffect(() => {
    console.log(`Component initialized. Task "${title}" just been put into the DOM`)
    // returned function will be called on component unmount, equivalent to componentWillUnmount
    return () => {
      console.log(`Destroy the component. Task "${title}" will be removed from the DOM`)
    }
  }, [])
  // This function will be executed each time a component's property or its internal state change
  // Equivalent to componentDidUpdate, with second property providing state/property that fire the side effect
  useEffect(() => {
    console.log('The "completed" property has been updated')
  }, [completed])

  return <TaskContainer completed={completed}>
    {console.log('Rendering the Task')}
    <TaskTitle onClick={completeSelf}>{title}</TaskTitle>
    <button onClick={removeSelf}>X</button>
  </TaskContainer>
}

export default Task