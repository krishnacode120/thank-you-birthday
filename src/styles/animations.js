import { keyframes } from 'styled-components';

export const floatUp = keyframes`
  0% { transform: translateY(100vh); }
  100% { transform: translateY(-120vh); }
`;

export const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;
