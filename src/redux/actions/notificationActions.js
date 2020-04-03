import {
  SET_NOTIFICATION,
  CLEAR_NOTIFICATION,
} from "../actionTypes";
import {find} from "lodash";
import {NotificationTypes} from "../../helpers/notificationTypes";

export const notifyForTypeAndMessage = (type, message) => (dispatch) => {
  const {color} = find(NotificationTypes, el => el.type === type)
  dispatch({
    type: SET_NOTIFICATION,
    payload: {
      color,
      message,
      type,
    }
  })

  setTimeout(() => dispatch(clearNotification()), 3000)
}

export const clearNotification = () => ({
  type: CLEAR_NOTIFICATION,
})
