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
  // Destructure the useArray hook functions without parameter directly here
  const {clear} = tasks
  // Add side effect that is being executed when tasks is updated
  // useEffect(() => console.log('New state of tasks: ', tasks), [tasks])

  const addTask = title => tasks.add(createTask(title))

  return <TodolistContainer>
    <Input onSubmit={addTask}/>
    {
      tasks.value.length > 0 &&
      map(tasks.value, task =>
        <Task
          {...task}
          complete={() => tasks.replaceByIdAndValue(task.id, {...task, completed: !task.completed})}
          remove={() => tasks.removeById(task.id)}
          key={task.id}
        />
      )
    }
    <button onClick={clear}>Clear</button>
  </TodolistContainer>
}

export default Todolist
