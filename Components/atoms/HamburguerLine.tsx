import styled from 'styled-components';
import { pixelToRem } from '../../utils/pixelToRem';
import { determineHamburguerLineRotation, determineHamburguerLineHeight } from '../../utils/hamburguerPositions';

export enum eposition {
  TOP,
  MIDDLE,
  BOTTOM
}

interface IHamburguerLine {
  position: eposition;
  isActive: boolean;
};

export const HamburguerLine = styled.div<IHamburguerLine>`
  background: white;
  border-radius: ${pixelToRem(12)};  
  height: ${pixelToRem(4)};  
  margin-bottom: ${props => props.isActive ? pixelToRem(determineHamburguerLineHeight(props.position)) : pixelToRem(3)};
  margin-right: ${pixelToRem(1.5)};  
  transition: all cubic-bezier(0.26, 0.1, 0.27, 1.55) 0.35s;
  transform: rotate(${props => determineHamburguerLineRotation(props.position, props.isActive)});
  width: ${pixelToRem(24)};
`;