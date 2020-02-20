import React, {useEffect} from "react"
import {map} from "lodash"
import {Ring} from 'react-awesome-spinners'
import Input from "../Input";
import {getGUID} from "../../helpers";
import Task from "../Task";
import TodolistContainer from "./styles/TodolistContainer";
import {clearTasks, fetchTasks, toggleTask} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";

const TodoList = () => {

  // Todo: move createTask in a helper that can be used in addTask action
  const createTask = title => ({
    title,
    completed: false,
    id: getGUID()
  })
  // Hook useArray is injecting generic behavior inside the component
  const {isLoading} = useSelector(state => state.tasks)
  const dispatch = useDispatch()
  const value = useSelector(state => state.tasks.tasks) || []

  // Fetch tasks after mount
  useEffect(() => {
    dispatch(fetchTasks())

    // Clear the tasks state when removing the current todolist from the DOM
    return () => {
      dispatch(clearTasks())
    }
  }, [])

  // Todo: create a addTask action
  const addTask = title => console.log('Please use a redux action to handle this')

  return <TodolistContainer>
    <Input onSubmit={addTask}/>
    {isLoading ? <Ring/> :
      value.length > 0 && <>
        {/*Using a meaningful name for the map callback empower readability*/}
        {map(value, task =>
          <Task
            {...task}
            // Todo: create complete and remove task actions
            complete={() => dispatch(toggleTask(task.id))}
            remove={() => null}
            key={task.id}
          />
        )}
        {/*Todo: create clear tasks action.*/}
        <button onClick={null}>Clear</button>
      </>
    }
  </TodolistContainer>
}

export default TodoList
