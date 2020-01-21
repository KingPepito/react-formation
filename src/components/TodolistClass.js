import React, {Component} from "react"
import {filter, map} from "lodash"
import Input from "./Input";
import {getGUID} from "../helpers";
import Task from "./Task";

class TodolistClass extends Component {

  state = {
    tasks: []
  }

  // Same thing is achieve with useEffect in TodoList.js
  componentDidUpdate(prevProps, prevState) {
    const {tasks} = this.state
    // Always use a condition with componentDidUpdate to not create an infinite loop
    if (tasks !== prevState.tasks) {
      console.log('New state of tasks: ', tasks)
    }
  }

  setTasks = tasks => {
    this.setState({tasks})
  }

  createTask = title => ({
    title,
    completed: false,
    id: getGUID()
  })

  addTask = title => {
    const {tasks} = this.state
    const newTask = this.createTask(title)
    this.setState({tasks: [...tasks, newTask]})
  }

  completeTaskForId = idToComplete => {
    const {tasks} = this.state
    this.setTasks(map(tasks, task =>
      task.id === idToComplete ? {...task, completed: !task.completed} : task))
  }

  removeTaskForId = idToRemove => {
    const { tasks } = this.state
    this.setTasks(filter(tasks, task => task.id !== idToRemove))
  }

  render = () => {
    const {tasks} = this.state
    return <div>
      <Input onSubmit={this.addTask}/>
      {
        tasks.length > 0 &&
        map(tasks, task =>
          <Task {...task} complete={this.completeTaskForId} remove={this.removeTaskForId}/>
        )
      }
    </div>
  }
}

export default TodolistClass
