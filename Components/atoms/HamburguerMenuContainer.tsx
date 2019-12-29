import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const HamburguerMenuContainer = styled.div`
  bottom: 0;
  background: #ff6800;
  clip-path: circle(${pixelToRem(15)} at 95vw 10vh);
  display: none;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  -webkit-clip-path: circle(${pixelToRem(15)} at 84.3% 9%);
  z-index: 1;
`;