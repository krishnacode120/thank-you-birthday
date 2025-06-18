import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SparkleCursor from '../components/SparkleCursor';
import scoreboardImg from '../assets/images/scoreboard.png';

const Scoreboard = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const raw = JSON.parse(localStorage.getItem('scoreboard') || '[]');

    const merged = raw.reduce((acc, curr) => {
      const existing = acc.find((e) => e.name === curr.name);
      if (existing) {
        existing.score += curr.score;
      } else {
        acc.push({ name: curr.name, score: curr.score });
      }
      return acc;
    }, []);

    const sorted = merged.sort((a, b) => b.score - a.score);
    setPlayers(sorted);
  }, []);

  return (
    <Wrapper>
      <SparkleCursor />
      <Title>🏅 Scoreboard</Title>
      <Board>
        <img src={scoreboardImg} alt="scoreboard" className="bg" />
        <Table>
          <thead>
            <tr>
              <th>🏷 Name</th>
              <th>💯 Score</th>
            </tr>
          </thead>
          <tbody>
            {players.map((p, i) => (
              <tr key={i}>
                <td>{p.name}</td>
                <td>{p.score}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Board>
      <BackBtn href="/games">⬅ Back to Games</BackBtn>
    </Wrapper>
  );
};

export default Scoreboard;
const Wrapper = styled.div`
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
  padding: 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #ffd700;
  margin-bottom: 1rem;
`;

const Board = styled.div`
  position: relative;
  padding: 2rem;
  max-width: 500px;
  margin: auto;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 0 20px #00ffe5;
  overflow: hidden;

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  z-index: 2;
  position: relative;

  th, td {
    padding: 1rem;
    font-size: 1.2rem;
    border-bottom: 1px solid #666;
  }

  th {
    color: #00f7ff;
  }

  td {
    color: #fff;
  }

  tr:nth-child(even) {
    background: rgba(255, 255, 255, 0.05);
  }
`;

const BackBtn = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.6rem 1.5rem;
  background: #ffd700;
  color: #000;
  border-radius: 10px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    background: #ff69b4;
    color: #fff;
  }
`;
