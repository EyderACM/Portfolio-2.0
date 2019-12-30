import styled from 'styled-components';

export const HamburguerWrapper = styled.div<any>(({disabled}) => `
  align-items: center;
  display: flex;
  justify-content: center;
  pointer-events: ${disabled ? "none" : "auto"};
  z-index: 2;
`);