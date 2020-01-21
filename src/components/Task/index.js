import React from "react";
import TaskContainer from "../Input/TaskContainer";
import TaskTitle from "../Input/TaskTitle";

const Task = ({complete, completed, id, title, remove}) => {
  const removeSelf = () => remove(id)
  const completeSelf = () => complete(id)
  return <TaskContainer completed={completed} >
    <TaskTitle onClick={completeSelf}>{title}</TaskTitle>
    <button onClick={removeSelf}>X</button>
  </TaskContainer>
}

export default Task