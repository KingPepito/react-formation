import React from 'react'
import HomeContainer from "./styles/HomeContainer";
import LoginForm from "./styles/LoginForm";
import {useHistory} from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const onSubmit = () => {
    // HERE check if the login correspound to an account
    // ...
    // THEN update the state of the app
    // ...
    // go to sample Overview page
    history.push('/overview')
  }
  return <HomeContainer>
    <h1>Welcome to my Todo list app</h1>
    <LoginForm onSubmit={onSubmit}>
      <input placeholder='login'/>
      <input type='password' placeholder='password'/>
      <button type="submit">Login</button>
    </LoginForm>
  </HomeContainer>
}
export default Home