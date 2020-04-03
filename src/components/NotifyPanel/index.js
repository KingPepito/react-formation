import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import NotifyPanelContainer from "./styles/NotifyPanelContainer";
import {clearNotification} from "../../redux/actions";
import CloseButton from "./styles/CloseButton";

const NotifyPanel = () => {
  const {color, message} = useSelector(state => state.notifications)
  const dispatch = useDispatch()
  return <>
    {
      message && color && <NotifyPanelContainer color={color}>
        {message}
        <CloseButton onClick={() => dispatch(clearNotification())}>X</CloseButton>
      </NotifyPanelContainer>
    }
  </>
}

export default NotifyPanel