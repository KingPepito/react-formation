import React from 'react';
import {bool} from 'prop-types';
import {StyledMenu} from './Menu.styled';
import StyledLink from "../../StyledLink";
import {useDispatch} from "react-redux";
import {logout} from "../../../redux/actions";

const Menu = ({open, ...props}) => {

  const isHidden = !!open;
  const tabIndex = isHidden ? 0 : -1;
  const dispatch = useDispatch()
  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <StyledLink to="/" tabIndex={tabIndex}>
        <span aria-hidden="true">💁🏻‍♂️</span>
        Home
      </StyledLink>
      <StyledLink to="/overview" tabIndex={tabIndex}>
        <span aria-hidden="true">💸</span>
        Overview
      </StyledLink>
      <StyledLink to="/todolist/sample%20List" tabIndex={tabIndex}>
        <span aria-hidden="true">📩</span>
        Todolist sample
      </StyledLink>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
