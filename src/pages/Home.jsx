import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Lottie from 'lottie-react';

import SparkleCursor from '../components/SparkleCursor';
import AudioPlayer from '../components/AudioPlayer';

import balloonAnim from '../assets/lottie/balloons.json';
import sparkleAnim from '../assets/lottie/sparkles.json';
import confettiAnim from '../assets/lottie/confetti.json';
import cakeAnim from '../assets/lottie/cake.json';

const Home = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const guest = localStorage.getItem('guestName');
    if (guest) setName(guest);
  }, []);

  return (
    <Wrapper>
      <SparkleCursor />
      <AudioPlayer />

      {/* Confetti & Sparkles */}
      <Lottie animationData={confettiAnim} className="confetti" loop autoPlay />
      <Lottie animationData={sparkleAnim} className="sparkles" loop autoPlay />
      <Lottie animationData={cakeAnim} className="cake" loop autoPlay />

      {/* Balloons */}
      <BalloonLayer>
        <Lottie animationData={balloonAnim} loop autoPlay />
      </BalloonLayer>

      {/* Thank You Message */}
      <MessageBox>
        <h1>🎉 Thank You, {name || 'Friend'}!</h1>
        <p>Your wishes made this day even more special 🎂</p>
        <ButtonRow>
          <button onClick={() => navigate('/games')}>🎮 Play Games</button>
          <button onClick={() => navigate('/scoreboard')}>🏆 View Scores</button>
          <button onClick={() => navigate('/thankyou')}>🎁 Final Message</button>
        </ButtonRow>
      </MessageBox>
    </Wrapper>
  );
};

export default Home;

// Styled Components

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  .confetti {
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 0;
    opacity: 0.9;
  }

  .sparkles {
    position: absolute;
    width: 120vw;
    height: 100vh;
    bottom: -10vh;
    left: -10vw;
    z-index: 0;
  }

  .cake {
    position: absolute;
    bottom: 0;
    width: 200px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
`;

const BalloonLayer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 0;
  pointer-events: none;
`;

const MessageBox = styled.div`
  position: relative;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 16px;
  color: #fff;
  max-width: 600px;
  box-shadow: 0 0 30px #ff8efb;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #ff69b4;
  }

  p {
    font-size: 1.2rem;
  }
`;

const ButtonRow = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  button {
    background: #ff69b4;
    border: none;
    padding: 0.8rem 1.4rem;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 12px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background: #ff1493;
      transform: scale(1.05);
    }
  }
`;
