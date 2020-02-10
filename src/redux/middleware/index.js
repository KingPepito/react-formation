import {ON_INIT, RECEIVE_TOKEN} from "../actionTypes";
// This middleware is overriding the ON_INIT action in order to
// get the token from localstorage each time the store is initialized
// It's basically persisting the token when the page is refreshed
export const persistToken = store => next => action => {
  switch(action.type) {
    case ON_INIT:
      //dispatch a new action with the token from localStorage
      next({
        type: RECEIVE_TOKEN,
        token: localStorage.getItem('TOKEN')
      });
      break;

    case RECEIVE_TOKEN:
      localStorage.setItem('TOKEN', action.token);
      break;
  }

  return next(action);
};