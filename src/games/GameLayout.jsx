import React from 'react';
import styled from 'styled-components';
import SparkleCursor from '../components/SparkleCursor';
import BalloonPopper from '../components/BalloonPopper';

const Layout = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #16003b, #000);
  padding: 2rem;
  color: white;
  position: relative;
  overflow: hidden;
`;

const GameLayout = ({ children }) => {
  return (
    <Layout>
      <SparkleCursor />
      <BalloonPopper count={8} />
      {children}
    </Layout>
  );
};

export default GameLayout;
