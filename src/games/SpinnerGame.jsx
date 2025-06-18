import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SparkleCursor from '../components/SparkleCursor';
import clickSound from '../assets/audio/click.mp3';
import successSound from '../assets/audio/success.mp3';

const emojis = ['🎂', '🎈', '🎉', '🎁', '🍰', '🍭'];
const shuffledCards = [...emojis, ...emojis].sort(() => Math.random() - 0.5);

const MemoryMatch = () => {
  const [cards, setCards] = useState(shuffledCards.map((emoji, index) => ({
    id: index,
    emoji,
    flipped: false,
    matched: false,
  })));

  const [flippedIndexes, setFlippedIndexes] = useState([]);
  const [score, setScore] = useState(0);
  const [lockBoard, setLockBoard] = useState(false);

  const playClick = () => new Audio(clickSound).play();
  const playSuccess = () => new Audio(successSound).play();

  const handleFlip = (index) => {
    if (lockBoard || cards[index].flipped || cards[index].matched) return;

    playClick();
    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);

    const newFlipped = [...flippedIndexes, index];
    setFlippedIndexes(newFlipped);

    if (newFlipped.length === 2) {
      setLockBoard(true);
      setTimeout(() => {
        const [i1, i2] = newFlipped;
        if (cards[i1].emoji === cards[i2].emoji) {
          newCards[i1].matched = newCards[i2].matched = true;
          setScore((prev) => prev + 1);
          playSuccess();
        } else {
          newCards[i1].flipped = newCards[i2].flipped = false;
        }
        setCards(newCards);
        setFlippedIndexes([]);
        setLockBoard(false);
      }, 1000);
    }
  };

  useEffect(() => {
    const totalMatches = emojis.length;
    if (score === totalMatches) {
      const name = localStorage.getItem('guestName') || 'Friend';
      const current = JSON.parse(localStorage.getItem('scoreboard') || '[]');
      const updated = [...current, { name, score: score * 10 }];
      localStorage.setItem('scoreboard', JSON.stringify(updated));
    }
  }, [score]);

  return (
    <Wrapper>
      <SparkleCursor />
      <h1>🎁 Memory Match</h1>
      <Grid>
        {cards.map((card, idx) => (
          <Card key={card.id} onClick={() => handleFlip(idx)}>
            <CardInner flipped={card.flipped || card.matched}>
              <Front>❓</Front>
              <Back>{card.emoji}</Back>
            </CardInner>
          </Card>
        ))}
      </Grid>
      <Score>Score: {score * 10}</Score>
      <BackLink href="/games">← Back to Games</BackLink>
    </Wrapper>
  );
};

export default MemoryMatch;
const Wrapper = styled.div`
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  padding: 2rem;
  color: #fff;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 70px);
  gap: 1rem;
  justify-content: center;
  margin: 2rem auto;
`;

const Card = styled.div`
  perspective: 1000px;
`;

const CardInner = styled.div`
  width: 70px;
  height: 70px;
  background: #ff8efb33;
  border-radius: 10px;
  box-shadow: 0 0 10px #ff8efb;
  text-align: center;
  font-size: 2rem;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${({ flipped }) => (flipped ? 'rotateY(180deg)' : 'none')};
`;

const Front = styled.div`
  backface-visibility: hidden;
  position: absolute;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Back = styled(Front)`
  transform: rotateY(180deg);
`;

const Score = styled.p`
  font-size: 1.5rem;
  color: #00ffea;
`;

const BackLink = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  color: #ffd700;
  text-decoration: none;
  font-size: 1.1rem;

  &:hover {
    text-decoration: underline;
  }
`;
