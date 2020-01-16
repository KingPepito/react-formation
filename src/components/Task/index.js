import React from "react";

const Task = ({complete, completed, id, title, remove}) => {
  const removeSelf = () => remove(id)
  const completeSelf = () => complete(id)
  return <div style={{display: 'flex'}}>
    <span style={{margin: '8px', cursor: "pointer", textDecoration: completed && 'line-through'}} onClick={completeSelf}>
      {title}
    </span>
    <button onClick={removeSelf}>X</button>
  </div>
}

export default Task