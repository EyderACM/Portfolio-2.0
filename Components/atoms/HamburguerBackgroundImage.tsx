import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';

export const HamburguerBackgroundImage = styled.img`
  animation: cameraPan 30s infinite;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  opacity: 0;
  position: absolute;
  top: 0;
  right: ${pixelToRem(220)};
  width: 100vw;
  z-index: 1;

  @keyframes cameraPan {
    0% {
      background-position-x: -40%;
    }    

    50% {
      background-position-x: 20%;
    }    

    100% {
      background-position-x: -40%;
    }
  }
`;