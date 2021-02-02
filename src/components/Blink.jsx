import React, { useState, useEffect } from 'react';

export const Blink = (props) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(()=>{
    const interval = setTimeout(() => {
      setIsVisible(!isVisible);
    }, 250);

    return () => clearInterval(interval);
  })

  return (
    <div className={!isVisible && "react-blink"}>{props.children}</div>
  )
}
