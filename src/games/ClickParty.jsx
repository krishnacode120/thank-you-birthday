import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import SparkleCursor from '../components/SparkleCursor';
import balloonImage from '../assets/images/balloon.png';
import popSound from '../assets/audio/pop.mp3';
import successSound from '../assets/audio/success.mp3';

const ClickParty = () => {
  const [balloons, setBalloons] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [gameOver, setGameOver] = useState(false);
  const intervalRef = useRef(null);

  const playPop = () => new Audio(popSound).play();
  const playSuccess = () => new Audio(successSound).play();

  // Create new balloons randomly
  const spawnBalloon = () => {
    const id = Date.now();
    const x = Math.random() * 80;
    const size = 40 + Math.random() * 40;
    setBalloons((prev) => [...prev, { id, x, size }]);
    setTimeout(() => {
      setBalloons((prev) => prev.filter((b) => b.id !== id));
    }, 4000);
  };

  useEffect(() => {
    if (timeLeft > 0) {
      intervalRef.current = setInterval(spawnBalloon, 700);
    }

    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(intervalRef.current);
          clearInterval(timer);
          setGameOver(true);
          playSuccess();
        }
        return t - 1;
      });
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
      clearInterval(timer);
    };
  }, []);

  const handlePop = (id) => {
    setBalloons((prev) => prev.filter((b) => b.id !== id));
    playPop();
    setScore((prev) => prev + 1);
  };

  useEffect(() => {
    if (gameOver) {
      const name = localStorage.getItem('guestName') || 'Friend';
      const current = JSON.parse(localStorage.getItem('scoreboard') || '[]');
      const updated = [...current, { name, score }];
      localStorage.setItem('scoreboard', JSON.stringify(updated));
    }
  }, [gameOver]);

  return (
    <Wrapper>
      <SparkleCursor />
      <Stats>
        <p>⏱ Time: {timeLeft}s</p>
        <p>🎯 Score: {score}</p>
      </Stats>

      {balloons.map((b) => (
        <Balloon
          key={b.id}
          size={b.size}
          x={b.x}
          onClick={() => handlePop(b.id)}
        >
          <img src={balloonImage} alt="balloon" />
        </Balloon>
      ))}

      {gameOver && (
        <ResultBox>
          <h1>🎉 Time's Up!</h1>
          <p>You popped {score} balloons!</p>
          <a href="/games">Back to Games</a>
        </ResultBox>
      )}
    </Wrapper>
  );
};

export default ClickParty;
const flyUp = keyframes`
  0% { bottom: -100px; opacity: 0; }
  20% { opacity: 1; }
  100% { bottom: 100vh; opacity: 0; }
`;

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
`;

const Balloon = styled.div`
  position: absolute;
  left: ${({ x }) => x}%;
  width: ${({ size }) => size}px;
  animation: ${flyUp} 5s linear forwards;
  bottom: -100px;
  z-index: 5;
  cursor: pointer;

  img {
    width: 100%;
    user-select: none;
  }
`;

const Stats = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 1.2rem;
  color: #fff;
  z-index: 10;
`;

const ResultBox = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  background: rgba(255, 255, 255, 0.15);
  padding: 2rem;
  border-radius: 16px;
  color: #fff;
  z-index: 20;
  box-shadow: 0 0 20px #ff8efb;

  a {
    margin-top: 1rem;
    display: inline-block;
    padding: 0.7rem 1.2rem;
    background: ${({ theme }) => theme.colors.primary};
    color: #000;
    border-radius: 10px;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      background: ${({ theme }) => theme.colors.secondary};
      color: #fff;
    }
  }
`;
