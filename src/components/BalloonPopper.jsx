import React from 'react';
import styled, { keyframes } from 'styled-components';
import balloon from '../assets/images/balloon.png';
import popSound from '../assets/audio/pop.mp3';

const float = keyframes`
  0% { transform: translateY(100vh); opacity: 1; }
  100% { transform: translateY(-150vh); opacity: 0.5; }
`;

const Balloon = styled.img`
  position: absolute;
  width: 60px;
  animation: ${float} 10s linear infinite;
  cursor: pointer;
`;

const BalloonPopper = ({ count = 10 }) => {
  const balloons = Array.from({ length: count });

  const handlePop = (e) => {
    new Audio(popSound).play();
    e.target.style.display = 'none';
  };

  return (
    <>
      {balloons.map((_, i) => (
        <Balloon
          src={balloon}
          key={i}
          onClick={handlePop}
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${8 + Math.random() * 5}s`,
            top: `${Math.random() * 100}px`
          }}
        />
      ))}
    </>
  );
};

export default BalloonPopper;
