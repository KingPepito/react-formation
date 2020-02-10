import React from "react";
import {useSelector} from "react-redux";
import {map} from "lodash";
import StyledLink from "../../components/StyledLink";

const OverviewPage = () => {
  // Get todoLists stored it in the store using useSelector hook
  const todos = useSelector(state => state.todoLists.todos)
  const user = useSelector(state => state.user.currentUser)

  return <>
    <h1>Hey {user && user.first_name}!</h1>
    <h2>Here you can find your Todo lists:</h2>
    <ul>
      {
        map(todos, todo => <StyledLink to={`/todolist/${todo.name}`}><li>{todo.name}</li></StyledLink>)
      }
    </ul>
  </>
}

export default OverviewPage