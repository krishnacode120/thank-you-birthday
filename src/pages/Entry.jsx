import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SparkleCursor from '../components/SparkleCursor';
import clickSound from '../assets/audio/click.mp3';

const Entry = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const audio = new Audio(clickSound);

  const handleEnter = () => {
    if (!name.trim()) return;
    localStorage.setItem('guestName', name);
    audio.play();
    navigate('/home');
  };

  return (
    <Container>
      <SparkleCursor />
      <Card>
        <h1>🎉 Welcome to Krishna’s Birthday Bash! 🎂</h1>
        <p>Enter your name to join the celebration</p>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleEnter}>Enter the Party</button>
      </Card>
    </Container>
  );
};

export default Entry;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  color: #fff;
  max-width: 400px;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);

  h1 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  input {
    padding: 0.7rem;
    width: 100%;
    border-radius: 8px;
    border: none;
    margin-bottom: 1rem;
  }

  button {
    padding: 0.7rem 1.5rem;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #000;
    border: none;
    font-weight: bold;
    transition: background 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: #fff;
    }
  }
`;
