import React from "react";
import "./Task.css";

const Task = ({complete, completed, id, title, remove}) => {
  const removeSelf = () => remove(id)
  const completeSelf = () => complete(id)
  return <div className='task-container'>
    <span className={`task-title ${completed && 'completed'}`} onClick={completeSelf}>
      {title}
    </span>
    <button onClick={removeSelf}>X</button>
  </div>
}

export default Task