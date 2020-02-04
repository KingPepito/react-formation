import React, {useRef} from 'react'
import {useHistory} from "react-router-dom";
import {get} from "lodash";
import axios from "axios";
import HomeContainer from "./styles/HomeContainer";
import LoginForm from "./styles/LoginForm";

const Home = () => {
  const history = useHistory();
  // Creating a ref for each input in order to get the value of the input when submitting the form.
  // The related react form is non-controlled.
  const loginInput = useRef()
  const passwordInput = useRef()

  const onSubmit = event => {
    // Prevent page to refresh
    event.preventDefault();
    event.stopPropagation();
    const email = get(loginInput, 'current.value')
    const password = get(passwordInput, 'current.value')
    // HERE check data validation
    // ...
    // Use a axios promise
    axios.post("https://reqres.in/api/login", {
      email, // same as "email": email
      password
    }).then(res => {
      // Add session cookie, very short duration for the course purpose
      document.cookie = `idUser=${res.data.token}; max-age=5`
      // Go to sample Overview page using history react-router hook
      history.push('/overview')
    })
      .catch(err => console.log(err))
    // THEN update the state of the app
    // ...
  }

  return <HomeContainer>
    <h1>Welcome to my Todo list app</h1>
    <LoginForm onSubmit={onSubmit}>
      <input ref={loginInput} placeholder='login'/>
      <input ref={passwordInput} type='password' placeholder='password'/>
      <button type="submit">Login</button>
    </LoginForm>
  </HomeContainer>
}
export default Home