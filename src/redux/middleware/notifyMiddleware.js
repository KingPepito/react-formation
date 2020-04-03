import {notifyForTypeAndMessage} from "../actions";
// This middleware is providing a notification system available on every potential action dispatched.
export const notify = store => next => action => {
  // Checking if the action dispatched contains notification data
  if (action.notification && action.notification.message && action.notification.type) {
    const {message, type} = action.notification
    notifyForTypeAndMessage(type, message)(store.dispatch)
  }

  return next(action);
};