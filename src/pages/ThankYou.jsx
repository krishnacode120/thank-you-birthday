import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import SparkleCursor from '../components/SparkleCursor';
import confettiAnim from '../assets/lottie/confetti.json';
import cakeAnim from '../assets/lottie/cake.json';
import useLottie from 'lottie-react';
import successSound from '../assets/audio/success.mp3';

const ThankYou = () => {
  useEffect(() => {
    const audio = new Audio(successSound);
    audio.play();
  }, []);

  const confettiLottie = useLottie({ animationData: confettiAnim, loop: true });
  const cakeLottie = useLottie({ animationData: cakeAnim, loop: true });

  return (
    <Wrapper>
      <SparkleCursor />
      <ConfettiLayer>{confettiLottie.View}</ConfettiLayer>
      <CakeContainer>{cakeLottie.View}</CakeContainer>
      <Title>🎂 Thank You, Friend!</Title>
      <Quote>"True friendship is the sweetest gift — thanks for being part of my day!"</Quote>
      <Message>
        Your heartfelt wishes lit up my celebration like fireworks!  
        <br />
        I feel blessed to have someone as awesome as you in my life. 💫
        <br />
        Let’s make more memories, play games, and share joy always!
      </Message>
      <Buttons>
        <a href="/games">🎮 Play More Games</a>
        <a href="/scoreboard">🏅 View Scoreboard</a>
        <a href="/home">🏡 Back to Home</a>
      </Buttons>
    </Wrapper>
  );
};

export default ThankYou;
const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  background: radial-gradient(circle at center, #5f00ba 20%, #0a001a 100%);
  color: #fff;
  text-align: center;
  padding: 4rem 1rem;
  position: relative;
  overflow: hidden;
  animation: ${fadeInUp} 1s ease;
`;

const ConfettiLayer = styled.div`
  position: absolute;
  top: -15%;
  left: 0;
  width: 100%;
  z-index: 1;
  pointer-events: none;
`;

const CakeContainer = styled.div`
  width: 180px;
  margin: 0 auto 1rem;
  z-index: 2;
  animation: ${bounce} 2s infinite;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #ffd700;
  margin: 1rem 0 0.5rem;
`;

const Quote = styled.p`
  font-style: italic;
  font-size: 1.2rem;
  color: #ffb3f9;
  margin-bottom: 1.5rem;
`;

const Message = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.9;
  padding: 0 1rem;
`;

const Buttons = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  z-index: 10;

  a {
    background: #ffd700;
    color: #000;
    padding: 0.8rem 1.6rem;
    border-radius: 12px;
    font-weight: bold;
    text-decoration: none;
    transition: 0.3s ease;

    &:hover {
      background: #ff69b4;
      color: #fff;
      transform: scale(1.05);
    }
  }
`;
