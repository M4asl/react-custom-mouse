import React, { useRef, useEffect } from 'react';
import './CustomCursorStyle.scss';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  // const positionRef = useRef({
  //   mouseX: 0,
  //   mouseY: 0,
  //   destinationX: 0,
  //   destinationY: 0,
  //   distanceX: 0,
  //   distanceY: 0,
  //   key: -1,
  // });

  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const { clientX, clientY } = event;
      const mouseX = clientX - cursorRef.current.clientWidth / 2;
      const mouseY = clientY - cursorRef.current.clientHeight / 2;
      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });
  }, []);
  return <div className="app-cursor" ref={cursorRef} />;
};

export default CustomCursor;
