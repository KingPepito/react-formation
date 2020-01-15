import React, {useState} from "react"
import {map} from "lodash"

const Todolist = () => {

  const [tasks, setTasks] = useState([
    "item 1",
    "item 2",
    "item 3",
    "item 4",
    "item 5",
  ])

  return <ul>
    {map(tasks, task => <li>{task}</li>)}
  </ul>
}

export default Todolist
