import styled from "styled-components";
import { createPortal } from 'react-dom'
<<<<<<< HEAD
import React, { cloneElement, createContext, useContext, useState,useEffect, useRef} from 'react'
import { HiXMark } from "react-icons/hi2";
import {useHandleOutside} from "../services/useHandleOutside";
=======
import React, { cloneElement, createContext, useContext, useState } from 'react'
import { HiXMark } from "react-icons/hi2";
>>>>>>> e3d0c6d0d6c99bcce3df5f6159c9266f949ed21d
const StyledModal = styled.div`
position:fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
background-color:var(--color-grey-0);
border-radius:var(--border-radius-lg);
box-shadow:var(--shadow-lg);
padding:3.2rem 4rem;
transition:all 0.5s;
`
const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--backdrop-color);
    backdrop-filter: blur(4px);
    z-index: 1000;
    transition: all 0.5s;
`

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;


const ModalContext = createContext()
export default function Modal({ children }) {
  const [isOpenModal, setisOpenModal] = useState("");
<<<<<<< HEAD
 
=======
>>>>>>> e3d0c6d0d6c99bcce3df5f6159c9266f949ed21d
  function close() {
    setisOpenModal('');
  }
  const open = setisOpenModal;
  return (
    <ModalContext.Provider value={{ open, isOpenModal, close }}>
      {children}
    </ModalContext.Provider>
  )
}
function Open({ children, opens }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opens) })
}

function Window({ children, name }) {
  const { close, isOpenModal } = useContext(ModalContext);
<<<<<<< HEAD
const ref=useHandleOutside(close);
  if (name !== isOpenModal) {
    return null;
  }
  return createPortal(<Overlay>
    <StyledModal ref={ref}>
=======
  useEffect(function(){
    document.addEventListener('click',handleClick)
  },[])
  if (name !== isOpenModal) {
    return null;
  }
 
  return createPortal(<Overlay>
    <StyledModal>
>>>>>>> e3d0c6d0d6c99bcce3df5f6159c9266f949ed21d
      <Button onClick={close}><HiXMark /></Button>
      <div>  {cloneElement(children, { onClose: close })}</div></StyledModal>
  </Overlay>, document.body)
}




Modal.Open = Open;
Modal.Window = Window;
<<<<<<< HEAD
=======

>>>>>>> e3d0c6d0d6c99bcce3df5f6159c9266f949ed21d
