import React, {useEffect} from "react"
import {map} from "lodash"
import {Ring} from 'react-awesome-spinners'
import Input from "../Input";
import Task from "../Task";
import TodolistContainer from "./styles/TodolistContainer";
import {
  addTaskForTitle,
  clearTasks,
  fetchTasks,
  removeTaskById,
  replaceTaskForIdAndValue,
} from "../../redux/actions/index";
import {useDispatch, useSelector} from "react-redux";

const TodoList = ({fetchSample = true}) => {
  // Hook useArray is injecting generic behavior inside the component
  const {isLoading} = useSelector(state => state.tasks)
  const dispatch = useDispatch()
  const value = useSelector(state => state.tasks.tasks) || []

  // Fetch tasks after mount
  useEffect(() => {
    // For the purpose of our exercise we might choose to fetch a sample or not
    fetchSample && dispatch(fetchTasks())
    // Clear the tasks state when removing the current todolist from the DOM
    return () => {
      dispatch(clearTasks())
    }
  }, [])

  const addTask = title => dispatch(addTaskForTitle(title))

  return <TodolistContainer>
    <Input onSubmit={addTask} placeholder="Add a new task"/>
    {isLoading ? <Ring/> :
      value.length > 0 && <>
        {/*Using a meaningful name for the map callback empower readability*/}
        {map(value, task =>
          <Task
            {...task}
            complete={() => dispatch(replaceTaskForIdAndValue(task.id, {...task, completed: !task.completed}))}
            remove={() => dispatch(removeTaskById(task.id))}
            key={task.id}
          />
        )}
        <button onClick={() => dispatch(clearTasks())}>Clear</button>
      </>
    }
  </TodolistContainer>
}

export default TodoList
