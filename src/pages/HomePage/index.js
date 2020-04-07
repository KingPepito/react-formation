import React, {useState} from 'react'
import {useHistory} from "react-router-dom";
import axios from "axios";
import HomeContainer from "./styles/HomeContainer";
import LoginForm from "./styles/LoginForm";
import {validateEmail} from "../../helpers/isEmailValid";
import Input from "../../components/Input";
import {useDispatch} from "react-redux";
import {fetchTodos, setToken, setUser} from "../../redux/actions";

const Home = () => {
  const history = useHistory();
  // Creating a ref for each input in order to get the value of the input when submitting the form.
  // The related react form is non-controlled.
  const [login, setLogin] = useState({value: '', color: null})
  const [password, setPassword] = useState('')
  // Create dispatch function that allow the component to dispatch whatever action needed.
  // It is less verbose than use connect HOC and less confusing regarding the props value.
  const dispatch = useDispatch()

  const red = 'rgba(255,31,21,0.82)',
    green = 'rgba(103,203,79,0.84)'

  const handleChangeLogin = (event) => {
    const {value} = event.target
    let color = null
    // Data validation, setting the login input color to red or green
    if(value){
      color = validateEmail(value) ? green : red
    }
    setLogin({value, color});
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }

  const onSubmit = event => {
    const email = login.value
    // Prevent page to refresh
    event.preventDefault();
    event.stopPropagation();
    if(!email || !password || !validateEmail(email)){
      // Notify the user that Email format is not valid
      console.log("Email format is not valid, please provide an correct email while logging.")
      return
    }
    // Use a axios promise
    axios.post("https://reqres.in/api/login", {
      email,
      password // same as password: password
    }).then(res => {
      // Set token using special action. For more details check https://michaelwashburnjr.com/2017/11/21/best-way-to-store-tokens-redux/
      dispatch(setToken(res.data.token))
      // THEN update the state of the app
      // Get Fake user data
      axios.get('https://reqres.in/api/users/2').then( res => {
        dispatch(setUser(res.data))
      })
      // Go to sample Overview page using history react-router hook
      history.push('/overview')
      // Load the todos in the store
      dispatch(fetchTodos())
    })
      .catch(err => console.log(err))

  }

  return <HomeContainer>
    <h1>Welcome to my Todo list app</h1>
    <LoginForm onSubmit={onSubmit}>
      <Input placeholder='login' color={login.color} onChange={handleChangeLogin}/>
      <Input type='password' placeholder='password' onChange={handleChangePassword}/>
      <button type="submit">Login</button>
    </LoginForm>
  </HomeContainer>
}

export default Home;