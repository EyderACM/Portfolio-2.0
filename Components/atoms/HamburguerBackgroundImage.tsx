import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';
import * as UNITS from '../../utils/units';

export interface IHamburguerBackgroundImage {
  isActive: boolean;
}

export const HamburguerBackgroundImage = styled.img<IHamburguerBackgroundImage>`
  display: none;

  @media (min-width: ${UNITS.MIN_TABLET_WIDTH}){
    animation: cameraPan 15s infinite;    
    height: 100vh;
    opacity: 0;
    position: absolute;
    top: 0;
    right: ${pixelToRem(220)};
    width: 100vw;
    z-index: 1;
  }

  @keyframes cameraPan {
    0% {
      background-position-x: 25%;
    }    

    25% {
      background-position-x: 40%;
    }

    50% {
      background-position-x: 0%;
    }

    75% {
      background-position-x: 40%;
    }    

    100% {
      background-position-x: 25%;
    }
  }
`;