import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import music from '../assets/audio/music.mp3';

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play()
        .then(() => setPlaying(true))
        .catch((err) => {
          console.warn("Autoplay blocked:", err);
        });
    }
  };

  useEffect(() => {
    const guest = localStorage.getItem('guestName');
    if (guest && !playing) {
      const timeout = setTimeout(playMusic, 500); // small sync delay
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <>
      <audio ref={audioRef} src={music} loop />
      {!playing && (
        <MusicButton onClick={playMusic}>
          ▶️ Play Music
        </MusicButton>
      )}
    </>
  );
};

export default AudioPlayer;

const MusicButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 0.6rem 1rem;
  background: #ff69b4;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  z-index: 20;
  box-shadow: 0 0 10px #ff69b4;
  transition: 0.3s;

  &:hover {
    background: #ff1493;
    transform: scale(1.05);
  }
`;
