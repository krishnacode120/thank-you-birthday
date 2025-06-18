import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const SparkleCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <Cursor style={{ left: position.x, top: position.y }} />
  );
};

export default SparkleCursor;

const Cursor = styled.div`
  width: 25px;
  height: 25px;
  background: radial-gradient(circle, #fff7b3, #ffd700, #ff8efb);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  mix-blend-mode: difference;
  filter: blur(2px);
  z-index: 9999;
  transform: translate(-50%, -50%);
`;
