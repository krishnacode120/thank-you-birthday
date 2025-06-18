import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Header = ({ title }) => {
  return <Container>{title}</Container>;
};

export default Header;
