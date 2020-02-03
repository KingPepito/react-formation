import React from 'react'
import TodoList from "../../components/TodoList";
import {useParams} from "react-router-dom";

const TodoListPage = () => {
  // `useParams` hook  is used here to get the dynamic pieces of the URL.
  let { id } = useParams();
  return <>
    <h2>{id}:</h2>
    <TodoList/>
  </>
}
export default TodoListPage