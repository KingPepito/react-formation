import React from "react";
import StyledLink from "../../components/StyledLink";

const OverviewPage = () =>
  <>
    <h1>Hey you!</h1>
    <h2>Here you can find your Todo lists:</h2>
    <ul>
      <StyledLink to='/todolist/test1'><li>List 1</li></StyledLink>
      <StyledLink to='/todolist/test2'><li>List 2</li></StyledLink>
      <StyledLink to='/todolist/test3'><li>List 3</li></StyledLink>
    </ul>
  </>

export default OverviewPage