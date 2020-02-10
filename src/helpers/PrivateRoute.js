import React from 'react'
import {Redirect, Route} from 'react-router-dom'
// This is only a sample of helper that handle private route
// A production app might need more security as JWT token server side.
export const PrivateRoute = ({component: Component, ...rest}) =>
  <Route
    {...rest}
    render={
      props => localStorage.getItem('TOKEN') ?
        <Component {...props}/>
        : <Redirect to={{
          pathname: '/',
          // Pass previous location to the homepage can be useful in some cases
          state: {from: props.location, msg: "You are not connected, please connect to your account"}
        }}/>
    }
  />
