import React, { useEffect, useRef } from 'react'

export function useHandleOutside(close) {
    const ref=useRef();
useEffect(function(){
  function handleClick(e)
  {
    if(ref.current&& !ref.current.contains(e.target)) {
      console.log("Click outside")
      close();}

  }
  document.addEventListener('click',handleClick,true)
  return ()=>document.removeEventListener("click",handleClick);
},[close])

  return ref;
}
