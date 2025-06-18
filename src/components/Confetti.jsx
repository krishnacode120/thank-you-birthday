import React from 'react';
import Lottie from 'lottie-react';
import confettiAnim from '../assets/lottie/confetti.json';

const Confetti = () => {
  return (
    <div style={{ position: 'fixed', width: '100%', zIndex: 100, pointerEvents: 'none' }}>
      <Lottie animationData={confettiAnim} loop={true} />
    </div>
  );
};

export default Confetti;
