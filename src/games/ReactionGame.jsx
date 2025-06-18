import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SparkleCursor from '../components/SparkleCursor';
import successSound from '../assets/audio/success.mp3';
import clickSound from '../assets/audio/click.mp3';

const ReactionGame = () => {
  const [status, setStatus] = useState('waiting');
  const [message, setMessage] = useState('Click Start to begin!');
  const [startTime, setStartTime] = useState(null);
  const [reactionTime, setReactionTime] = useState(null);
  const [triesLeft, setTriesLeft] = useState(3);
  const [score, setScore] = useState([]);

  const playClick = () => new Audio(clickSound).play();
  const playSuccess = () => new Audio(successSound).play();

  const startGame = () => {
    if (triesLeft === 0) return;
    playClick();
    setStatus('ready');
    setMessage('Wait for GREEN...');
    const delay = 2000 + Math.random() * 4000;

    setTimeout(() => {
      setStatus('go');
      setMessage('NOW! Tap!');
      setStartTime(Date.now());
    }, delay);
  };

  const handleClick = () => {
    if (status === 'ready') {
      setMessage('Too soon! ❌');
      setStatus('waiting');
    }

    if (status === 'go') {
      const time = Date.now() - startTime;
      playSuccess();
      setReactionTime(time);
      setScore((prev) => [...prev, time]);
      setTriesLeft((prev) => prev - 1);
      setMessage(`⚡ Your Time: ${time}ms`);
      setStatus('waiting');
    }
  };

  useEffect(() => {
    if (triesLeft === 0) {
      const best = Math.min(...score);
      const name = localStorage.getItem('guestName') || 'Friend';
      const current = JSON.parse(localStorage.getItem('scoreboard') || '[]');
      const updated = [...current, { name, score: best }];
      localStorage.setItem('scoreboard', JSON.stringify(updated));
    }
  }, [triesLeft]);

  return (
    <Wrapper status={status} onClick={handleClick}>
      <SparkleCursor />
      <Content>
        <h1>⚡ Reaction Speed</h1>
        <p>{message}</p>
        <button onClick={startGame} disabled={status !== 'waiting' || triesLeft === 0}>
          {triesLeft > 0 ? 'Start' : 'Game Over'}
        </button>
        <Tries>Tries Left: {triesLeft}</Tries>
        <Score>
          {score.map((t, i) => (
            <span key={i}>Try {i + 1}: {t}ms</span>
          ))}
        </Score>
      </Content>
    </Wrapper>
  );
};

export default ReactionGame;
const Wrapper = styled.div`
  height: 100vh;
  background: ${({ status }) =>
    status === 'go' ? '#4CAF50' :
    status === 'ready' ? '#ff0000' :
    '#333'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.5s;
  color: #fff;
  cursor: pointer;
`;

const Content = styled.div`
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #ffd700;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  button {
    padding: 0.7rem 2rem;
    font-size: 1.2rem;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    background: #ffd700;
    color: #000;
    font-weight: bold;

    &:disabled {
      background: #777;
      cursor: not-allowed;
    }
  }
`;

const Tries = styled.div`
  margin-top: 1.5rem;
  font-size: 1rem;
  opacity: 0.8;
`;

const Score = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-size: 1rem;
  color: #b2fffb;
`;
