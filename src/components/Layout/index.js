import React, {useRef, useState} from 'react'
import Burger from "./Burger";
import Menu from "./Menu";
import {useOnClickOutside} from "../hooks/useOnClickOutside";
import FooterContainer from "./styles/FooterContainer";
import FooterList from "./styles/FooterList";
import NotifyPanel from "../NotifyPanel";

const FixedMenuLayout = ({children}) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));
  return <>
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} aria-controls={menuId}/>
      <Menu open={open} setOpen={setOpen} id={menuId}/>
    </div>
    {children}
    <FooterContainer>
      <h1>Footer</h1>
      <FooterList>
        <a href='/test'>Faq</a>
        <a href='/test'>About</a>
        <a href='/test'>Contact us</a>
      </FooterList>
    </FooterContainer>
    <NotifyPanel/>
  </>
}

export default FixedMenuLayout