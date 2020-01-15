import React, {useState} from "react"
import {map} from "lodash"
import Input from "./Input";

const Todolist = () => {

  const [tasks, setTasks] = useState([])

  const addTask = newTask => setTasks([...tasks, newTask])

  return <div>
    <Input onSubmit={addTask}/>
    {
      tasks.length > 0 && <ul>
        {map(tasks, task => <li>{task}</li>)}
      </ul>
    }
  </div>
}

export default Todolist
