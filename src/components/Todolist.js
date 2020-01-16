import React, {useState} from "react"
import {filter, map} from "lodash"
import Input from "./Input";
import {getGUID} from "../helpers";
import Task from "./Task";

const Todolist = () => {

  const [tasks, setTasks] = useState([])

  const createTask = title => ({
    title,
    completed: false,
    id: getGUID()
  })

  const addTask = newTask => setTasks([...tasks, createTask(newTask)])

  const completeTaskForId = idToComplete => setTasks(map(tasks, task =>
    task.id === idToComplete ? {...task, completed: !task.completed} : task))

  const removeTaskForId = idToRemove => setTasks(filter(tasks, task => task.id !== idToRemove))

  return <div>
    <Input onSubmit={addTask}/>
    {
      tasks.length > 0 &&
      map(tasks, task =>
        <Task {...task} complete={completeTaskForId} remove={removeTaskForId}/>
      )
    }
  </div>
}

export default Todolist
