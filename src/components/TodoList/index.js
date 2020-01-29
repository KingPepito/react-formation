import React, {useEffect} from "react"
import {map} from "lodash"
import Input from "../Input";
import {getGUID} from "../../helpers";
import Task from "../Task";
import useArray from "../hooks/useArray";
import TodolistContainer from "./styles/TodolistContainer";

const Todolist = () => {

  const createTask = title => ({
    title,
    completed: false,
    id: getGUID()
  })
  // Hook useArray is injecting generic behavior inside the component
  const tasks = useArray([])
  // Destructure the useArray hook functions and vars.
  const {
    add,
    clear,
    removeById,
    replaceByIdAndValue,
    value
  } = tasks

  // Add side effect that is being executed when tasks is updated
  // useEffect(() => console.log('New state of tasks: ', tasks), [tasks])

  const addTask = title => add(createTask(title))

  return <TodolistContainer>
    <Input onSubmit={addTask}/>
    {
      value.length > 0 &&
      // Using a meaningful name for the map callback empower readability
      map(value, task =>
        <Task
          {...task}
          complete={() => replaceByIdAndValue(task.id, {...task, completed: !task.completed})}
          remove={() => removeById(task.id)}
          key={task.id}
        />
      )
    }
    {/*Here we can pass clear function directly here without creating an anonymous function.*/}
    <button onClick={clear}>Clear</button>
  </TodolistContainer>
}

export default Todolist
