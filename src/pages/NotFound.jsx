import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  padding: 5rem;
  color: white;
  background: #1a001f;
  height: 100vh;
`;

const NotFound = () => {
  return (
    <Wrapper>
      <h1>🚫 404 - Page Not Found</h1>
      <p>Oops! Looks like you're lost in the party!</p>
      <a href="/" style={{ color: '#ff69b4', textDecoration: 'underline' }}>
        Go Home
      </a>
    </Wrapper>
  );
};

export default NotFound;
