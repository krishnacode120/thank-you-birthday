import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SparkleCursor from '../components/SparkleCursor';
import clickSound from '../assets/audio/click.mp3';

import confettiImg from '../assets/images/spinner.png';  // Spinner image
import confetti from '../assets/images/balloon.png';     // Click party image
import con from '../assets/images/scoreboard.png';       // Scoreboard image
import confe from '../assets/images/reaction.png';       // Reaction game image

const Games = () => {
  const navigate = useNavigate();
  const audio = new Audio(clickSound);

  const handleGameSelect = (path) => {
    audio.play();
    navigate(path);
  };

  return (
    <Container>
      <SparkleCursor />
      <Header>🎯 Mini Games Zone</Header>

      <Grid>
        <Card onClick={() => handleGameSelect('/games/click-party')}>
          <img src={confetti} alt="Click Game" />
          <h2>🎈 Click Party</h2>
        </Card>
        <Card onClick={() => handleGameSelect('/games/reaction')}>
          <img src={confe} alt="Reaction Game" />
          <h2>⚡ Reaction Speed</h2>
        </Card>
        <Card onClick={() => handleGameSelect('/games/spinner')}>
          <img src={confettiImg} alt="Memory game" />
          <h2>🏆 Memory Game</h2>
        </Card>
        <Card onClick={() => handleGameSelect('/scoreboard')}>
          <img src={con} alt="Scoreboard" />
          <h2>🏆 Scoreboard</h2>
        </Card>
      </Grid>

      <BackButton onClick={() => handleGameSelect('/home')}>🔙 Back to Home</BackButton>
    </Container>
  );
};

export default Games;
const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  color: #fff;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Header = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  justify-items: center;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  cursor: pointer;
  transition: 0.3s;
  max-width: 280px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transform: scale(1.05);
    box-shadow: 0 0 30px #ff8efb;
  }

  img {
    width: 100px;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.3rem;
  }
`;

const BackButton = styled.button`
  margin-top: 1rem;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  background-color: #ff69b4;
  border: none;
  color: white;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 0 15px #ff69b4;

  &:hover {
    background-color: #ff1493;
    transform: scale(1.05);
  }
`;
